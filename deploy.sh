#!/bin/bash

# The Cache-Control property sets the length of time that files should be cached in the Cloudfront Edge location _and_
# the user browser.
AWS_OPTIONS="--region ${AWS_REGION} --cache-control max-age=3600"

# pip install awscli

# Empty the bucket
aws s3 rm s3://$AWS_BUCKET --recursive

# Upload HTML files
aws s3 cp build/html s3://$AWS_BUCKET/ --recursive $AWS_OPTIONS \
    --exclude ".buildinfo" \
    --exclude "contents" \
    --exclude "genindex" \
    --exclude "_sources/*" \
    --exclude "_images/*" \
    --exclude "_static/*" \
    --content-type "text/html"

# Upload static assets
aws s3 cp build/html/_images s3://$AWS_BUCKET/_images/ --recursive $AWS_OPTIONS
aws s3 cp build/html/_static s3://$AWS_BUCKET/_static/ --recursive $AWS_OPTIONS

# Bust the cloudfront edge cache, invalidate every object in the distribution
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
