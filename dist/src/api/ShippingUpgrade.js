"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingUpgrade = void 0;
var Request_1 = require("../client/Request");
//methods class
var ShippingUpgrade = /** @class */ (function () {
    function ShippingUpgrade(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Get the shipping upgrades available for a listing.
     */
    ShippingUpgrade.prototype.getListingShippingUpgrades = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id/shipping/upgrades", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.prototype.createListingShippingUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id/shipping/upgrades", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.prototype.updateListingShippingUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id/shipping/upgrades", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    ShippingUpgrade.prototype.deleteListingShippingUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/listings/:listing_id/shipping/upgrades", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    ShippingUpgrade.prototype.findAllShippingTemplateUpgrades = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shipping/templates/:shipping_template_id/upgrades", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.prototype.createShippingTemplateUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shipping/templates/:shipping_template_id/upgrades", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.prototype.updateShippingTemplateUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shipping/templates/:shipping_template_id/upgrades", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    ShippingUpgrade.prototype.deleteShippingTemplateUpgrade = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/shipping/templates/:shipping_template_id/upgrades", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return ShippingUpgrade;
}());
exports.ShippingUpgrade = ShippingUpgrade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hpcHBpbmdVcGdyYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9TaGlwcGluZ1VwZ3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2Q0FBNEM7QUFrRzVDLGVBQWU7QUFDZjtJQUNJLHlCQUNxQixNQUEwQixFQUMxQixPQUFjO1FBRGQsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztJQUVuQyxDQUFDO0lBR0Q7O09BRUc7SUFDRyxvREFBMEIsR0FBaEMsVUFDSSxNQUFtRSxFQUNuRSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSx5Q0FBeUMsRUFDOUMsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLHNEQUE0QixHQUFsQyxVQUNJLE1BQXFFLEVBQ3JFLEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLHlDQUF5QyxFQUM5QyxNQUFNLEVBQUUsTUFBTSxLQUNmLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csc0RBQTRCLEdBQWxDLFVBQ0ksTUFBcUUsRUFDckUsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUseUNBQXlDLEVBQzlDLE1BQU0sRUFBRSxLQUFLLEtBQ2QsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRyxzREFBNEIsR0FBbEMsVUFDSSxNQUFxRSxFQUNyRSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSx5Q0FBeUMsRUFDOUMsTUFBTSxFQUFFLFFBQVEsS0FDakIsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRyx5REFBK0IsR0FBckMsVUFDSSxNQUF3RSxFQUN4RSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSxvREFBb0QsRUFDekQsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLHVEQUE2QixHQUFuQyxVQUNJLE1BQXNFLEVBQ3RFLEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLG9EQUFvRCxFQUN6RCxNQUFNLEVBQUUsTUFBTSxLQUNmLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csdURBQTZCLEdBQW5DLFVBQ0ksTUFBc0UsRUFDdEUsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUsb0RBQW9ELEVBQ3pELE1BQU0sRUFBRSxLQUFLLEtBQ2QsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRyx1REFBNkIsR0FBbkMsVUFDSSxNQUFzRSxFQUN0RSxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSxvREFBb0QsRUFDekQsTUFBTSxFQUFFLFFBQVEsS0FDakIsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBdkhELElBdUhDO0FBdkhZLDBDQUFlIn0=