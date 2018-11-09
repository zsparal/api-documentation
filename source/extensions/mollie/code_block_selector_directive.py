from docutils import nodes
from docutils.parsers.rst import Directive

from sphinx.directives.code import CodeBlock


class CodeBlockSelectorDirective(Directive):
    has_content = True
    required_arguments = 0
    optional_arguments = 0

    # The programming language of the code examples is recognized by the lexer
    # that is used to parse the example.
    supported_lexers = {
        "bash": {
            "language": "curl",
            "language_text": "cURL",
            "github_url": None,
        },
        "php": {
            "language": "php",
            "language_text": "PHP",
            "github_url": "https://github.com/mollie/mollie-api-php",
        },
        "ruby": {
            "language": "ruby",
            "language_text": "Ruby",
            "github_url": "https://github.com/mollie/mollie-api-ruby",
        },
        "python": {
            "language": "python",
            "language_text": "Python",
            "github_url": "https://github.com/mollie/mollie-api-python",
        },
        "javascript": {
            "language": "nodejs",
            "language_text": "Node.js",
            "github_url": "https://github.com/mollie/mollie-api-node",
        },
    }

    def run(self):
        # Create code example selector.
        example_selector = self.create_example_selector()

        # Parse the code blocks inside the directive body.
        parsed_body = nodes.Element()
        self.state.nested_parse(self.content, self.content_offset, parsed_body)

        # Build the collection of code examples using the parsed code blocks.
        code_examples = self.extract_code_examples(parsed_body.children)
        example_container = nodes.container()
        example_container.extend(code_examples)

        return [example_selector, example_container]

    def create_example_selector(self):
        selector_container = nodes.container()
        selector_container["classes"].append("example-switcher")

        for lexer, properties in self.supported_lexers.items():
            button = nodes.inline(text=properties["language_text"])
            button["classes"].append("example-switch")
            button["ids"].append("example-switch-{}".format(properties["language"]))

            selector_container += button

        return selector_container

    def extract_code_examples(self, code_blocks):
        code_examples = {}

        # Add the examples that were added to the documentation page.
        for code_block in code_blocks:
            lexer = code_block.attributes["language"]
            if lexer not in self.supported_lexers:
                message = "We don't support the '{}' lexer for codeblocks"
                raise LookupError(message.format(lexer))

            code_examples[lexer] = code_block

        # Add 'generic' code blocks for missing examples.
        for lexer in self.supported_lexers:
            if lexer in code_examples:
                continue

            code_block = self.create_generic_code_block(lexer)
            code_examples[lexer] = code_block

        # Add the example language as a class to the code block.
        for lexer, code_block in code_examples.items():
            lexer_properties = self.supported_lexers[lexer]
            class_name = "example-{}".format(lexer_properties["language"])

            code_block["classes"].append(class_name)

        return code_examples.values()

    def create_generic_code_block(self, lexer):
        properties = self.supported_lexers[lexer]
        content = (
            "This API call has not yet been implemented in our {} API client. " +
            "If you have some spare time,\nyou could open a pull request at: {}"
        ).format(properties["language_text"], properties["github_url"])

        code_block = CodeBlock(
            "generic-code-block",
            ["bash"],
            {"linenos": True},
            [content],
            self.lineno,
            self.content_offset,
            self.block_text,
            self.state,
            self.state_machine
        )
        parsed_block = code_block.run()

        return parsed_block[0]
