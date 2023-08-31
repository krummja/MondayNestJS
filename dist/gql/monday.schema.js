"use strict";
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceIcon = exports.Workspace = exports.Webhook = exports.Version = exports.User = exports.Update = exports.Team = exports.Tag = exports.Reply = exports.IQuery = exports.Plan = exports.OutOfOffice = exports.Notification = exports.IMutation = exports.Item = exports.Group = exports.Folder = exports.Complexity = exports.ColumnValue = exports.Column = exports.BoardView = exports.BoardDuplication = exports.Board = exports.Asset = exports.AppMonetizationStatus = exports.ActivityLogType = exports.AccountProduct = exports.Account = exports.WorkspaceSubscriberKind = exports.WorkspacesOrderBy = exports.WorkspaceKind = exports.WebhookEventType = exports.VersionKind = exports.UserKind = exports.State = exports.PositionRelative = exports.NotificationTargetType = exports.GroupAttributes = exports.FolderColor = exports.FirstDayOfTheWeek = exports.DuplicateBoardType = exports.ColumnType = exports.ColumnProperty = exports.BoardSubscriberKind = exports.BoardsOrderBy = exports.BoardObjectType = exports.BoardKind = exports.BoardAttributes = exports.AssetsSource = exports.AccountProductKind = void 0;
exports.WorkspaceSettings = void 0;
/* tslint:disable */
/* eslint-disable */
var AccountProductKind;
(function (AccountProductKind) {
    AccountProductKind["core"] = "core";
    AccountProductKind["marketing"] = "marketing";
    AccountProductKind["crm"] = "crm";
    AccountProductKind["software"] = "software";
    AccountProductKind["projectManagement"] = "projectManagement";
    AccountProductKind["project_management"] = "project_management";
    AccountProductKind["forms"] = "forms";
    AccountProductKind["whiteboard"] = "whiteboard";
})(AccountProductKind || (exports.AccountProductKind = AccountProductKind = {}));
var AssetsSource;
(function (AssetsSource) {
    AssetsSource["all"] = "all";
    AssetsSource["columns"] = "columns";
    AssetsSource["gallery"] = "gallery";
})(AssetsSource || (exports.AssetsSource = AssetsSource = {}));
var BoardAttributes;
(function (BoardAttributes) {
    BoardAttributes["name"] = "name";
    BoardAttributes["description"] = "description";
    BoardAttributes["communication"] = "communication";
})(BoardAttributes || (exports.BoardAttributes = BoardAttributes = {}));
var BoardKind;
(function (BoardKind) {
    BoardKind["public"] = "public";
    BoardKind["private"] = "private";
    BoardKind["share"] = "share";
})(BoardKind || (exports.BoardKind = BoardKind = {}));
var BoardObjectType;
(function (BoardObjectType) {
    BoardObjectType["board"] = "board";
    BoardObjectType["sub_items_board"] = "sub_items_board";
    BoardObjectType["document"] = "document";
    BoardObjectType["custom_object"] = "custom_object";
})(BoardObjectType || (exports.BoardObjectType = BoardObjectType = {}));
var BoardsOrderBy;
(function (BoardsOrderBy) {
    BoardsOrderBy["created_at"] = "created_at";
    BoardsOrderBy["used_at"] = "used_at";
})(BoardsOrderBy || (exports.BoardsOrderBy = BoardsOrderBy = {}));
var BoardSubscriberKind;
(function (BoardSubscriberKind) {
    BoardSubscriberKind["subscriber"] = "subscriber";
    BoardSubscriberKind["owner"] = "owner";
})(BoardSubscriberKind || (exports.BoardSubscriberKind = BoardSubscriberKind = {}));
var ColumnProperty;
(function (ColumnProperty) {
    ColumnProperty["title"] = "title";
    ColumnProperty["description"] = "description";
})(ColumnProperty || (exports.ColumnProperty = ColumnProperty = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["auto_number"] = "auto_number";
    ColumnType["board_relation"] = "board_relation";
    ColumnType["button"] = "button";
    ColumnType["checkbox"] = "checkbox";
    ColumnType["color_picker"] = "color_picker";
    ColumnType["country"] = "country";
    ColumnType["creation_log"] = "creation_log";
    ColumnType["date"] = "date";
    ColumnType["dependency"] = "dependency";
    ColumnType["doc"] = "doc";
    ColumnType["dropdown"] = "dropdown";
    ColumnType["email"] = "email";
    ColumnType["file"] = "file";
    ColumnType["formula"] = "formula";
    ColumnType["hour"] = "hour";
    ColumnType["integration"] = "integration";
    ColumnType["item_assignees"] = "item_assignees";
    ColumnType["item_id"] = "item_id";
    ColumnType["last_updated"] = "last_updated";
    ColumnType["link"] = "link";
    ColumnType["location"] = "location";
    ColumnType["long_text"] = "long_text";
    ColumnType["mirror"] = "mirror";
    ColumnType["name"] = "name";
    ColumnType["numbers"] = "numbers";
    ColumnType["people"] = "people";
    ColumnType["phone"] = "phone";
    ColumnType["progress"] = "progress";
    ColumnType["rating"] = "rating";
    ColumnType["status"] = "status";
    ColumnType["subtasks"] = "subtasks";
    ColumnType["tags"] = "tags";
    ColumnType["team"] = "team";
    ColumnType["text"] = "text";
    ColumnType["timeline"] = "timeline";
    ColumnType["time_tracking"] = "time_tracking";
    ColumnType["vote"] = "vote";
    ColumnType["week"] = "week";
    ColumnType["world_clock"] = "world_clock";
    ColumnType["unsupported"] = "unsupported";
})(ColumnType || (exports.ColumnType = ColumnType = {}));
var DuplicateBoardType;
(function (DuplicateBoardType) {
    DuplicateBoardType["duplicate_board_with_structure"] = "duplicate_board_with_structure";
    DuplicateBoardType["duplicate_board_with_pulses"] = "duplicate_board_with_pulses";
    DuplicateBoardType["duplicate_board_with_pulses_and_updates"] = "duplicate_board_with_pulses_and_updates";
})(DuplicateBoardType || (exports.DuplicateBoardType = DuplicateBoardType = {}));
var FirstDayOfTheWeek;
(function (FirstDayOfTheWeek) {
    FirstDayOfTheWeek["sunday"] = "sunday";
    FirstDayOfTheWeek["monday"] = "monday";
})(FirstDayOfTheWeek || (exports.FirstDayOfTheWeek = FirstDayOfTheWeek = {}));
var FolderColor;
(function (FolderColor) {
    FolderColor["DONE_GREEN"] = "DONE_GREEN";
    FolderColor["BRIGHT_GREEN"] = "BRIGHT_GREEN";
    FolderColor["WORKING_ORANGE"] = "WORKING_ORANGE";
    FolderColor["DARK_ORANGE"] = "DARK_ORANGE";
    FolderColor["SUNSET"] = "SUNSET";
    FolderColor["STUCK_RED"] = "STUCK_RED";
    FolderColor["DARK_RED"] = "DARK_RED";
    FolderColor["SOFIA_PINK"] = "SOFIA_PINK";
    FolderColor["LIPSTICK"] = "LIPSTICK";
    FolderColor["PURPLE"] = "PURPLE";
    FolderColor["DARK_PURPLE"] = "DARK_PURPLE";
    FolderColor["INDIGO"] = "INDIGO";
    FolderColor["BRIGHT_BLUE"] = "BRIGHT_BLUE";
    FolderColor["AQUAMARINE"] = "AQUAMARINE";
    FolderColor["CHILI_BLUE"] = "CHILI_BLUE";
    FolderColor["NULL"] = "NULL";
})(FolderColor || (exports.FolderColor = FolderColor = {}));
var GroupAttributes;
(function (GroupAttributes) {
    GroupAttributes["title"] = "title";
    GroupAttributes["color"] = "color";
    GroupAttributes["position"] = "position";
    GroupAttributes["relative_position_after"] = "relative_position_after";
    GroupAttributes["relative_position_before"] = "relative_position_before";
})(GroupAttributes || (exports.GroupAttributes = GroupAttributes = {}));
var NotificationTargetType;
(function (NotificationTargetType) {
    NotificationTargetType["Project"] = "Project";
    NotificationTargetType["Post"] = "Post";
})(NotificationTargetType || (exports.NotificationTargetType = NotificationTargetType = {}));
var PositionRelative;
(function (PositionRelative) {
    PositionRelative["before_at"] = "before_at";
    PositionRelative["after_at"] = "after_at";
})(PositionRelative || (exports.PositionRelative = PositionRelative = {}));
var State;
(function (State) {
    State["all"] = "all";
    State["active"] = "active";
    State["archived"] = "archived";
    State["deleted"] = "deleted";
})(State || (exports.State = State = {}));
var UserKind;
(function (UserKind) {
    UserKind["all"] = "all";
    UserKind["non_guests"] = "non_guests";
    UserKind["guests"] = "guests";
    UserKind["non_pending"] = "non_pending";
})(UserKind || (exports.UserKind = UserKind = {}));
var VersionKind;
(function (VersionKind) {
    VersionKind["deprecated"] = "deprecated";
    VersionKind["stable"] = "stable";
    VersionKind["preview"] = "preview";
    VersionKind["dev"] = "dev";
})(VersionKind || (exports.VersionKind = VersionKind = {}));
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["change_column_value"] = "change_column_value";
    WebhookEventType["create_column"] = "create_column";
    WebhookEventType["change_status_column_value"] = "change_status_column_value";
    WebhookEventType["change_subitem_column_value"] = "change_subitem_column_value";
    WebhookEventType["change_specific_column_value"] = "change_specific_column_value";
    WebhookEventType["create_item"] = "create_item";
    WebhookEventType["create_subitem"] = "create_subitem";
    WebhookEventType["create_update"] = "create_update";
    WebhookEventType["edit_update"] = "edit_update";
    WebhookEventType["delete_update"] = "delete_update";
    WebhookEventType["create_subitem_update"] = "create_subitem_update";
    WebhookEventType["change_subitem_name"] = "change_subitem_name";
    WebhookEventType["change_name"] = "change_name";
    WebhookEventType["when_date_arrived"] = "when_date_arrived";
    WebhookEventType["item_deleted"] = "item_deleted";
    WebhookEventType["subitem_deleted"] = "subitem_deleted";
    WebhookEventType["item_archived"] = "item_archived";
    WebhookEventType["subitem_archived"] = "subitem_archived";
    WebhookEventType["item_restored"] = "item_restored";
    WebhookEventType["item_moved_to_any_group"] = "item_moved_to_any_group";
    WebhookEventType["item_moved_to_specific_group"] = "item_moved_to_specific_group";
    WebhookEventType["move_subitem"] = "move_subitem";
})(WebhookEventType || (exports.WebhookEventType = WebhookEventType = {}));
var WorkspaceKind;
(function (WorkspaceKind) {
    WorkspaceKind["open"] = "open";
    WorkspaceKind["closed"] = "closed";
})(WorkspaceKind || (exports.WorkspaceKind = WorkspaceKind = {}));
var WorkspacesOrderBy;
(function (WorkspacesOrderBy) {
    WorkspacesOrderBy["created_at"] = "created_at";
})(WorkspacesOrderBy || (exports.WorkspacesOrderBy = WorkspacesOrderBy = {}));
var WorkspaceSubscriberKind;
(function (WorkspaceSubscriberKind) {
    WorkspaceSubscriberKind["subscriber"] = "subscriber";
    WorkspaceSubscriberKind["owner"] = "owner";
})(WorkspaceSubscriberKind || (exports.WorkspaceSubscriberKind = WorkspaceSubscriberKind = {}));
class Account {
}
exports.Account = Account;
class AccountProduct {
}
exports.AccountProduct = AccountProduct;
class ActivityLogType {
}
exports.ActivityLogType = ActivityLogType;
class AppMonetizationStatus {
}
exports.AppMonetizationStatus = AppMonetizationStatus;
class Asset {
}
exports.Asset = Asset;
class Board {
}
exports.Board = Board;
class BoardDuplication {
}
exports.BoardDuplication = BoardDuplication;
class BoardView {
}
exports.BoardView = BoardView;
class Column {
}
exports.Column = Column;
class ColumnValue {
}
exports.ColumnValue = ColumnValue;
class Complexity {
}
exports.Complexity = Complexity;
class Folder {
}
exports.Folder = Folder;
class Group {
}
exports.Group = Group;
class Item {
}
exports.Item = Item;
class IMutation {
}
exports.IMutation = IMutation;
class Notification {
}
exports.Notification = Notification;
class OutOfOffice {
}
exports.OutOfOffice = OutOfOffice;
class Plan {
}
exports.Plan = Plan;
class IQuery {
}
exports.IQuery = IQuery;
class Reply {
}
exports.Reply = Reply;
class Tag {
}
exports.Tag = Tag;
class Team {
}
exports.Team = Team;
class Update {
}
exports.Update = Update;
class User {
}
exports.User = User;
class Version {
}
exports.Version = Version;
class Webhook {
}
exports.Webhook = Webhook;
class Workspace {
}
exports.Workspace = Workspace;
class WorkspaceIcon {
}
exports.WorkspaceIcon = WorkspaceIcon;
class WorkspaceSettings {
}
exports.WorkspaceSettings = WorkspaceSettings;
