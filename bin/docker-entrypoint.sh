#!/bin/bash

dev_tools_config_dir="$HOME/.config/wechat_web_devtools"

if [ -d $dev_tools_config_dir ]; then
  rm -rf "$dev_tools_config_dir/Default/.ide"
  rm -rf "$dev_tools_config_dir/Singleton*"
fi

[ -z "$1" ] && exec /wxdt/bin/wxdt start || exec "$@"
