"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_tag_1 = require("graphql-tag");
var fragment_1 = require("./fragment");
// We use the gql tag to parse our query string into a query document
exports.getChatQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetChat($chatId: ID!) {\n    chat(chatId: $chatId) {\n      ...ChatWithoutMessages\n      messages {\n        ...Message\n      }\n    }\n  }\n\n  ", "\n  ", "\n"], ["\n  query GetChat($chatId: ID!) {\n    chat(chatId: $chatId) {\n      ...ChatWithoutMessages\n      messages {\n        ...Message\n      }\n    }\n  }\n\n  ", "\n  ", "\n"])), fragment_1.fragments['chatWithoutMessages'], fragment_1.fragments['message']);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2hhdC5xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldENoYXQucXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThCO0FBQzlCLHVDQUFxQztBQUVyQyxxRUFBcUU7QUFDeEQsUUFBQSxZQUFZLEdBQUcscUJBQUcsd1BBQUEsK0pBVTNCLEVBQWdDLE1BQ2hDLEVBQW9CLElBQ3ZCLEtBRkcsb0JBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNoQyxvQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHtmcmFnbWVudHN9IGZyb20gJy4vZnJhZ21lbnQnO1xuXG4vLyBXZSB1c2UgdGhlIGdxbCB0YWcgdG8gcGFyc2Ugb3VyIHF1ZXJ5IHN0cmluZyBpbnRvIGEgcXVlcnkgZG9jdW1lbnRcbmV4cG9ydCBjb25zdCBnZXRDaGF0UXVlcnkgPSBncWxgXG4gIHF1ZXJ5IEdldENoYXQoJGNoYXRJZDogSUQhKSB7XG4gICAgY2hhdChjaGF0SWQ6ICRjaGF0SWQpIHtcbiAgICAgIC4uLkNoYXRXaXRob3V0TWVzc2FnZXNcbiAgICAgIG1lc3NhZ2VzIHtcbiAgICAgICAgLi4uTWVzc2FnZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICR7ZnJhZ21lbnRzWydjaGF0V2l0aG91dE1lc3NhZ2VzJ119XG4gICR7ZnJhZ21lbnRzWydtZXNzYWdlJ119XG5gO1xuIl19