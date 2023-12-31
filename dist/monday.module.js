"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MondayModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayModule = void 0;
const common_1 = require("@nestjs/common");
const monday_core_module_1 = require("./monday-core.module");
let MondayModule = exports.MondayModule = MondayModule_1 = class MondayModule {
    static forRoot(options) {
        return {
            module: MondayModule_1,
            imports: [monday_core_module_1.MondayCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: MondayModule_1,
            imports: [monday_core_module_1.MondayCoreModule.forRootAsync(options)],
        };
    }
};
exports.MondayModule = MondayModule = MondayModule_1 = __decorate([
    (0, common_1.Module)({})
], MondayModule);
