{
  "targets": [
    {
      "target_name": "parser",
      "sources": [
        "parser.cc"
      ],
      "include_dirs": ["<!(node -e \"require('nan')\")", "./libpg_query"],
      "libraries": ["../libpg_query/libpg_query.a"],
    }
  ]
}