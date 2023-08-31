export declare enum AccountProductKind {
    core = "core",
    marketing = "marketing",
    crm = "crm",
    software = "software",
    projectManagement = "projectManagement",
    project_management = "project_management",
    forms = "forms",
    whiteboard = "whiteboard"
}
export declare enum AssetsSource {
    all = "all",
    columns = "columns",
    gallery = "gallery"
}
export declare enum BoardAttributes {
    name = "name",
    description = "description",
    communication = "communication"
}
export declare enum BoardKind {
    "public" = "public",
    "private" = "private",
    share = "share"
}
export declare enum BoardObjectType {
    board = "board",
    sub_items_board = "sub_items_board",
    document = "document",
    custom_object = "custom_object"
}
export declare enum BoardsOrderBy {
    created_at = "created_at",
    used_at = "used_at"
}
export declare enum BoardSubscriberKind {
    subscriber = "subscriber",
    owner = "owner"
}
export declare enum ColumnProperty {
    title = "title",
    description = "description"
}
export declare enum ColumnType {
    auto_number = "auto_number",
    board_relation = "board_relation",
    button = "button",
    checkbox = "checkbox",
    color_picker = "color_picker",
    country = "country",
    creation_log = "creation_log",
    date = "date",
    dependency = "dependency",
    doc = "doc",
    dropdown = "dropdown",
    email = "email",
    file = "file",
    formula = "formula",
    hour = "hour",
    integration = "integration",
    item_assignees = "item_assignees",
    item_id = "item_id",
    last_updated = "last_updated",
    link = "link",
    location = "location",
    long_text = "long_text",
    mirror = "mirror",
    name = "name",
    numbers = "numbers",
    people = "people",
    phone = "phone",
    progress = "progress",
    rating = "rating",
    status = "status",
    subtasks = "subtasks",
    tags = "tags",
    team = "team",
    text = "text",
    timeline = "timeline",
    time_tracking = "time_tracking",
    vote = "vote",
    week = "week",
    world_clock = "world_clock",
    unsupported = "unsupported"
}
export declare enum DuplicateBoardType {
    duplicate_board_with_structure = "duplicate_board_with_structure",
    duplicate_board_with_pulses = "duplicate_board_with_pulses",
    duplicate_board_with_pulses_and_updates = "duplicate_board_with_pulses_and_updates"
}
export declare enum FirstDayOfTheWeek {
    sunday = "sunday",
    monday = "monday"
}
export declare enum FolderColor {
    DONE_GREEN = "DONE_GREEN",
    BRIGHT_GREEN = "BRIGHT_GREEN",
    WORKING_ORANGE = "WORKING_ORANGE",
    DARK_ORANGE = "DARK_ORANGE",
    SUNSET = "SUNSET",
    STUCK_RED = "STUCK_RED",
    DARK_RED = "DARK_RED",
    SOFIA_PINK = "SOFIA_PINK",
    LIPSTICK = "LIPSTICK",
    PURPLE = "PURPLE",
    DARK_PURPLE = "DARK_PURPLE",
    INDIGO = "INDIGO",
    BRIGHT_BLUE = "BRIGHT_BLUE",
    AQUAMARINE = "AQUAMARINE",
    CHILI_BLUE = "CHILI_BLUE",
    NULL = "NULL"
}
export declare enum GroupAttributes {
    title = "title",
    color = "color",
    position = "position",
    relative_position_after = "relative_position_after",
    relative_position_before = "relative_position_before"
}
export declare enum NotificationTargetType {
    Project = "Project",
    Post = "Post"
}
export declare enum PositionRelative {
    before_at = "before_at",
    after_at = "after_at"
}
export declare enum State {
    all = "all",
    active = "active",
    archived = "archived",
    deleted = "deleted"
}
export declare enum UserKind {
    all = "all",
    non_guests = "non_guests",
    guests = "guests",
    non_pending = "non_pending"
}
export declare enum VersionKind {
    deprecated = "deprecated",
    stable = "stable",
    preview = "preview",
    dev = "dev"
}
export declare enum WebhookEventType {
    change_column_value = "change_column_value",
    create_column = "create_column",
    change_status_column_value = "change_status_column_value",
    change_subitem_column_value = "change_subitem_column_value",
    change_specific_column_value = "change_specific_column_value",
    create_item = "create_item",
    create_subitem = "create_subitem",
    create_update = "create_update",
    edit_update = "edit_update",
    delete_update = "delete_update",
    create_subitem_update = "create_subitem_update",
    change_subitem_name = "change_subitem_name",
    change_name = "change_name",
    when_date_arrived = "when_date_arrived",
    item_deleted = "item_deleted",
    subitem_deleted = "subitem_deleted",
    item_archived = "item_archived",
    subitem_archived = "subitem_archived",
    item_restored = "item_restored",
    item_moved_to_any_group = "item_moved_to_any_group",
    item_moved_to_specific_group = "item_moved_to_specific_group",
    move_subitem = "move_subitem"
}
export declare enum WorkspaceKind {
    open = "open",
    closed = "closed"
}
export declare enum WorkspacesOrderBy {
    created_at = "created_at"
}
export declare enum WorkspaceSubscriberKind {
    subscriber = "subscriber",
    owner = "owner"
}
export declare class Account {
    country_code?: Nullable<string>;
    first_day_of_the_week: FirstDayOfTheWeek;
    id: number;
    logo?: Nullable<string>;
    name: string;
    plan?: Nullable<Plan>;
    products?: Nullable<Nullable<AccountProduct>[]>;
    show_timeline_weekends: boolean;
    sign_up_product_kind?: Nullable<string>;
    slug: string;
    tier?: Nullable<string>;
}
export declare class AccountProduct {
    id?: Nullable<number>;
    kind?: Nullable<AccountProductKind>;
}
export declare class ActivityLogType {
    account_id: string;
    created_at: string;
    data: string;
    entity: string;
    event: string;
    id: string;
    user_id: string;
}
export declare class AppMonetizationStatus {
    is_supported: boolean;
}
export declare class Asset {
    created_at?: Nullable<Date>;
    file_extension: string;
    file_size: number;
    id: string;
    name: string;
    original_geometry?: Nullable<string>;
    public_url: string;
    uploaded_by: User;
    url: string;
    url_thumbnail?: Nullable<string>;
}
export declare class Board {
    activity_logs?: Nullable<Nullable<ActivityLogType>[]>;
    board_folder_id?: Nullable<number>;
    board_kind: BoardKind;
    columns?: Nullable<Nullable<Column>[]>;
    communication?: Nullable<JSON>;
    creator: User;
    description?: Nullable<string>;
    groups?: Nullable<Nullable<Group>[]>;
    id: string;
    item_terminology?: Nullable<string>;
    items?: Nullable<Nullable<Item>[]>;
    items_count?: Nullable<number>;
    name: string;
    owners: Nullable<User>[];
    permissions: string;
    state: State;
    subscribers: Nullable<User>[];
    tags?: Nullable<Nullable<Tag>[]>;
    team_owners?: Nullable<Team[]>;
    top_group: Group;
    type?: Nullable<BoardObjectType>;
    updated_at?: Nullable<ISO8601DateTime>;
    updates?: Nullable<Nullable<Update>[]>;
    views?: Nullable<Nullable<BoardView>[]>;
    workspace?: Nullable<Workspace>;
    workspace_id?: Nullable<number>;
}
export declare class BoardDuplication {
    board: Board;
    is_async: boolean;
}
export declare class BoardView {
    id: string;
    name: string;
    settings_str: string;
    type: string;
    view_specific_data_str: string;
}
export declare class Column {
    archived: boolean;
    description?: Nullable<string>;
    id: string;
    settings_str: string;
    title: string;
    type: string;
    width?: Nullable<number>;
}
export declare class ColumnValue {
    additional_info?: Nullable<JSON>;
    description?: Nullable<string>;
    id: string;
    text?: Nullable<string>;
    title: string;
    type: string;
    value?: Nullable<JSON>;
}
export declare class Complexity {
    after: number;
    before: number;
    query: number;
    reset_in_x_seconds: number;
}
export declare class Folder {
    children: Nullable<Board>[];
    color?: Nullable<FolderColor>;
    created_at: Date;
    id: number;
    name: string;
    owner_id?: Nullable<number>;
    parent?: Nullable<Folder>;
    sub_folders: Nullable<Folder>[];
    workspace: Workspace;
}
export declare class Group {
    archived?: Nullable<boolean>;
    color: string;
    deleted?: Nullable<boolean>;
    id: string;
    items?: Nullable<Nullable<Item>[]>;
    position: string;
    title: string;
}
export declare class Item {
    assets?: Nullable<Nullable<Asset>[]>;
    board?: Nullable<Board>;
    column_values?: Nullable<Nullable<ColumnValue>[]>;
    created_at?: Nullable<Date>;
    creator?: Nullable<User>;
    creator_id: string;
    email: string;
    group?: Nullable<Group>;
    id: string;
    name: string;
    parent_item?: Nullable<Item>;
    relative_link?: Nullable<string>;
    state?: Nullable<State>;
    subitems?: Nullable<Nullable<Item>[]>;
    subscribers: Nullable<User>[];
    updated_at?: Nullable<Date>;
    updates?: Nullable<Nullable<Update>[]>;
}
export declare abstract class IMutation {
    add_file_to_column?: Nullable<Asset>;
    add_file_to_update?: Nullable<Asset>;
    add_teams_to_board?: Nullable<Nullable<Team>[]>;
    add_teams_to_workspace?: Nullable<Nullable<Team>[]>;
    add_users_to_board?: Nullable<Nullable<User>[]>;
    add_users_to_workspace?: Nullable<Nullable<User>[]>;
    archive_board?: Nullable<Board>;
    archive_group?: Nullable<Group>;
    archive_item?: Nullable<Item>;
    change_column_metadata?: Nullable<Column>;
    change_column_title?: Nullable<Column>;
    change_column_value?: Nullable<Item>;
    change_multiple_column_values?: Nullable<Item>;
    change_simple_column_value?: Nullable<Item>;
    clear_item_updates?: Nullable<Item>;
    complexity?: Nullable<Complexity>;
    create_board?: Nullable<Board>;
    create_column?: Nullable<Column>;
    create_folder?: Nullable<Folder>;
    create_group?: Nullable<Group>;
    create_item?: Nullable<Item>;
    create_notification?: Nullable<Notification>;
    create_or_get_tag?: Nullable<Tag>;
    create_subitem?: Nullable<Item>;
    create_update?: Nullable<Update>;
    create_webhook?: Nullable<Webhook>;
    create_workspace?: Nullable<Workspace>;
    delete_board?: Nullable<Board>;
    delete_column?: Nullable<Column>;
    delete_folder?: Nullable<Folder>;
    delete_group?: Nullable<Group>;
    delete_item?: Nullable<Item>;
    delete_subscribers_from_board?: Nullable<Nullable<User>[]>;
    delete_teams_from_workspace?: Nullable<Nullable<Team>[]>;
    delete_update?: Nullable<Update>;
    delete_users_from_workspace?: Nullable<Nullable<User>[]>;
    delete_webhook?: Nullable<Webhook>;
    delete_workspace?: Nullable<Workspace>;
    duplicate_board?: Nullable<BoardDuplication>;
    duplicate_group?: Nullable<Group>;
    duplicate_item?: Nullable<Item>;
    like_update?: Nullable<Update>;
    move_item_to_group?: Nullable<Item>;
    update_board?: Nullable<JSON>;
    update_folder?: Nullable<Folder>;
    update_group?: Nullable<Group>;
}
export declare class Notification {
    id: string;
    text?: Nullable<string>;
}
export declare class OutOfOffice {
    active?: Nullable<boolean>;
    disable_notifications?: Nullable<boolean>;
    end_date?: Nullable<Date>;
    start_date?: Nullable<Date>;
    type?: Nullable<string>;
}
export declare class Plan {
    max_users: number;
    period?: Nullable<string>;
    tier?: Nullable<string>;
    version: number;
}
export declare abstract class IQuery {
    account?: Nullable<Account>;
    apps_monetization_status?: Nullable<AppMonetizationStatus>;
    assets?: Nullable<Nullable<Asset>[]>;
    boards?: Nullable<Nullable<Board>[]>;
    complexity?: Nullable<Complexity>;
    folders?: Nullable<Nullable<Folder>[]>;
    items?: Nullable<Nullable<Item>[]>;
    items_by_column_values?: Nullable<Nullable<Item>[]>;
    items_by_multiple_column_values?: Nullable<Nullable<Item>[]>;
    me?: Nullable<User>;
    tags?: Nullable<Nullable<Tag>[]>;
    teams?: Nullable<Nullable<Team>[]>;
    updates?: Nullable<Nullable<Update>[]>;
    users?: Nullable<Nullable<User>[]>;
    version: Version;
    versions: Version[];
    webhooks?: Nullable<Nullable<Webhook>[]>;
    workspaces?: Nullable<Nullable<Workspace>[]>;
}
export declare class Reply {
    body: string;
    created_at?: Nullable<Date>;
    creator?: Nullable<User>;
    creator_id?: Nullable<string>;
    id: string;
    text_body?: Nullable<string>;
    updated_at?: Nullable<Date>;
}
export declare class Tag {
    color: string;
    id: number;
    name: string;
}
export declare class Team {
    id: number;
    name: string;
    picture_url?: Nullable<string>;
    users?: Nullable<Nullable<User>[]>;
}
export declare class Update {
    assets?: Nullable<Nullable<Asset>[]>;
    body: string;
    created_at?: Nullable<Date>;
    creator?: Nullable<User>;
    creator_id?: Nullable<string>;
    id: string;
    item_id?: Nullable<string>;
    replies?: Nullable<Nullable<Reply>[]>;
    text_body?: Nullable<string>;
    updated_at?: Nullable<Date>;
}
export declare class User {
    account: Account;
    birthday?: Nullable<Date>;
    country_code?: Nullable<string>;
    created_at?: Nullable<Date>;
    current_language?: Nullable<string>;
    email: string;
    enabled: boolean;
    id: number;
    is_admin?: Nullable<boolean>;
    is_guest?: Nullable<boolean>;
    is_pending?: Nullable<boolean>;
    is_verified?: Nullable<boolean>;
    is_view_only?: Nullable<boolean>;
    join_date?: Nullable<Date>;
    last_activity?: Nullable<Date>;
    location?: Nullable<string>;
    mobile_phone?: Nullable<string>;
    name: string;
    out_of_office?: Nullable<OutOfOffice>;
    phone?: Nullable<string>;
    photo_original?: Nullable<string>;
    photo_small?: Nullable<string>;
    photo_thumb?: Nullable<string>;
    photo_thumb_small?: Nullable<string>;
    photo_tiny?: Nullable<string>;
    sign_up_product_kind?: Nullable<string>;
    teams?: Nullable<Nullable<Team>[]>;
    time_zone_identifier?: Nullable<string>;
    title?: Nullable<string>;
    url: string;
    utc_hours_diff?: Nullable<number>;
}
export declare class Version {
    kind: VersionKind;
    value: string;
}
export declare class Webhook {
    board_id: number;
    config?: Nullable<string>;
    event: WebhookEventType;
    id: string;
}
export declare class Workspace {
    account_product?: Nullable<AccountProduct>;
    created_at?: Nullable<Date>;
    description?: Nullable<string>;
    id?: Nullable<number>;
    kind?: Nullable<WorkspaceKind>;
    name: string;
    owners_subscribers?: Nullable<Nullable<User>[]>;
    settings?: Nullable<WorkspaceSettings>;
    state?: Nullable<State>;
    team_owners_subscribers?: Nullable<Team[]>;
    teams_subscribers?: Nullable<Nullable<Team>[]>;
    users_subscribers?: Nullable<Nullable<User>[]>;
}
export declare class WorkspaceIcon {
    color?: Nullable<string>;
    image?: Nullable<string>;
}
export declare class WorkspaceSettings {
    icon?: Nullable<WorkspaceIcon>;
}
export type File = any;
export type ISO8601DateTime = any;
export type JSON = any;
type Nullable<T> = T | null;
export {};
