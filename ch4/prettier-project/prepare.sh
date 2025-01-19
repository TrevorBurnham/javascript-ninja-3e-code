#!/usr/bin/env bash
PROJECT_PATH=$PWD
cd "$(git rev-parse --show-toplevel)"
husky "$PROJECT_PATH/.husky"
