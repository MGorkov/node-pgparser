#include <nan.h>
#include "pg_query.h"

using v8::FunctionTemplate;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;
using Nan::Utf8String;
using Nan::Error;

NAN_METHOD(parse) {
  PgQueryParseResult result;
  Utf8String query(info[0]);
  result = pg_query_parse(*query);

  if (result.error) {
    info.GetReturnValue().Set(Error(result.error->message));
  } else {
    info.GetReturnValue().Set(New(result.parse_tree).ToLocalChecked());
  }

  pg_query_free_parse_result(result);
}

NAN_MODULE_INIT(InitAll) {
    NAN_EXPORT(target, parse);
}

NODE_MODULE(parser, InitAll)
