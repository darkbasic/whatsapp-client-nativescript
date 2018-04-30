"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = require("graphql-tag");
// We use the gql tag to parse our query string into a query document
exports.removeChatMutation = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation RemoveChat($chatId: ID!) {\n    removeChat(chatId: $chatId)\n  }\n"], ["\n  mutation RemoveChat($chatId: ID!) {\n    removeChat(chatId: $chatId)\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlQ2hhdC5tdXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbW92ZUNoYXQubXV0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThCO0FBRTlCLHFFQUFxRTtBQUN4RCxRQUFBLGtCQUFrQixHQUFHLHFCQUFHLDRKQUFBLGlGQUlwQyxLQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbi8vIFdlIHVzZSB0aGUgZ3FsIHRhZyB0byBwYXJzZSBvdXIgcXVlcnkgc3RyaW5nIGludG8gYSBxdWVyeSBkb2N1bWVudFxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoYXRNdXRhdGlvbiA9IGdxbGBcbiAgbXV0YXRpb24gUmVtb3ZlQ2hhdCgkY2hhdElkOiBJRCEpIHtcbiAgICByZW1vdmVDaGF0KGNoYXRJZDogJGNoYXRJZClcbiAgfVxuYDtcbiJdfQ==