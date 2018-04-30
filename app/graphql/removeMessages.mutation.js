"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = require("graphql-tag");
// We use the gql tag to parse our query string into a query document
exports.removeMessagesMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation RemoveMessages($chatId: ID!, $messageIds: [ID]) {\n    removeMessages(chatId: $chatId, messageIds: $messageIds)\n  }\n"], ["\n  mutation RemoveMessages($chatId: ID!, $messageIds: [ID]) {\n    removeMessages(chatId: $chatId, messageIds: $messageIds)\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlTWVzc2FnZXMubXV0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVNZXNzYWdlcy5tdXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEI7QUFFOUIscUVBQXFFO0FBQ3hELFFBQUEsc0JBQXNCLEdBQUcscUJBQUcsZ05BQUEscUlBSXhDLEtBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuLy8gV2UgdXNlIHRoZSBncWwgdGFnIHRvIHBhcnNlIG91ciBxdWVyeSBzdHJpbmcgaW50byBhIHF1ZXJ5IGRvY3VtZW50XG5leHBvcnQgY29uc3QgcmVtb3ZlTWVzc2FnZXNNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gUmVtb3ZlTWVzc2FnZXMoJGNoYXRJZDogSUQhLCAkbWVzc2FnZUlkczogW0lEXSkge1xuICAgIHJlbW92ZU1lc3NhZ2VzKGNoYXRJZDogJGNoYXRJZCwgbWVzc2FnZUlkczogJG1lc3NhZ2VJZHMpXG4gIH1cbmA7XG4iXX0=