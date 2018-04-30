"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = require("graphql-tag");
// We use the gql tag to parse our query string into a query document
exports.removeAllMessagesMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation RemoveAllMessages($chatId: ID!, $all: Boolean) {\n    removeMessages(chatId: $chatId, all: $all)\n  }\n"], ["\n  mutation RemoveAllMessages($chatId: ID!, $all: Boolean) {\n    removeMessages(chatId: $chatId, all: $all)\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlQWxsTWVzc2FnZXMubXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVBbGxNZXNzYWdlcy5tdXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEI7QUFFOUIscUVBQXFFO0FBQ3hELFFBQUEseUJBQXlCLEdBQUcscUJBQUcsaU1BQUEsc0hBSTNDLEtBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuLy8gV2UgdXNlIHRoZSBncWwgdGFnIHRvIHBhcnNlIG91ciBxdWVyeSBzdHJpbmcgaW50byBhIHF1ZXJ5IGRvY3VtZW50XG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsTWVzc2FnZXNNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gUmVtb3ZlQWxsTWVzc2FnZXMoJGNoYXRJZDogSUQhLCAkYWxsOiBCb29sZWFuKSB7XG4gICAgcmVtb3ZlTWVzc2FnZXMoY2hhdElkOiAkY2hhdElkLCBhbGw6ICRhbGwpXG4gIH1cbmA7XG4iXX0=