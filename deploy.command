#!/bin/sh

cd $(dirname $0)

firebase deploy --only functions
