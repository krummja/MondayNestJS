"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayProviders = exports.MondayService = exports.MONDAY_SERVICE = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const monday_constants_1 = require("./monday.constants");
exports.MONDAY_SERVICE = "MONDAY_SERVICE";
let MondayService = exports.MondayService = class MondayService {
    get sdk() {
        return this._sdkAdapter;
    }
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    onModuleInit() {
        this._sdkAdapter = this.moduleRef.get(monday_constants_1.MONDAY_SDK_ADAPTER, { strict: false });
    }
};
exports.MondayService = MondayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], MondayService);
exports.MondayProviders = [
    {
        provide: exports.MONDAY_SERVICE,
        useClass: MondayService,
    }
];
