{
  "targets": [
    {
      "target_name": "<(module_name)",
      "sources": [
        "parser.cc"
      ],
      "include_dirs": ["<!(node -e \"require('nan')\")", "./libpg_query", "./libpg_query/tmp/postgres/src/include"],
      "ldflags": ["-Wl,--gc-sections"],
      "conditions": [
        ['OS=="linux"', {
          "libraries": ["../libpg_query/libpg_query.a"],
        }],
        ['OS=="mac"', {
          "libraries": ["../libpg_query/libpg_query.a"],
        }],
        ['OS=="win"', {
          "libraries": ["../libpg_query/pg_query.lib"],
					"msvs_settings": {
						"VCCLCompilerTool": {
							"ExceptionHandling": 0,
							"AdditionalOptions": ["/EHsc"]
						}
					},
					"defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ],
        }],
      ],
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}
