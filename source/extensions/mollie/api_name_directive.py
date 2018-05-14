from docutils import nodes
from docutils.parsers.rst import Directive, directives


class ApiNameDirective(Directive):
    has_content = False
    required_arguments = 1
    final_argument_whitespace = True
    option_spec = {
        "version": directives.positive_int
    }

    def run(self):
        api_name_line = nodes.line(text=self.arguments[0] + " ")

        api_name_line["classes"].extend(["api-name", "h2"])

        if "version" in self.options:
            api_version_line = nodes.inline(text="v" + str(self.options["version"]))

            api_version_line["classes"].append("api-name__version")

            api_name_line += [api_version_line]

            if self.options["version"] == 1:
                warning_node = nodes.warning()

                warning_text = nodes.line_block()
                warning_par_1 = nodes.paragraph(text=
                    "The v1 API has been deprecated. New features will go into the "
                    "v2 API. We're recommending all new implementations to be built "
                    "on top of the v2 API.")
                warning_par_2 = nodes.paragraph(text=
                    "The v1 API will be supported for the foreseeable future, at "
                    "least until July 2023.")
                warning_text += [warning_par_1, warning_par_2]

                warning_node += warning_text

                return [api_name_line, warning_node]

        return [api_name_line]
