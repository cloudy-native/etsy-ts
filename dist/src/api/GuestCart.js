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
exports.GuestCart = void 0;
var Request_1 = require("../client/Request");
//methods class
var GuestCart = /** @class */ (function () {
    function GuestCart(config, apiKeys) {
        this.config = config;
        this.apiKeys = apiKeys;
    }
    /**
     * Get all guest's carts
     */
    GuestCart.prototype.findAllGuestCarts = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Add a listing to guest's cart
     */
    GuestCart.prototype.addToGuestCart = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts", method: "POST" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Update a guest's cart listing purchase quantity
     */
    GuestCart.prototype.updateGuestCartListingQuantity = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Remove a listing from a guest's cart
     */
    GuestCart.prototype.removeGuestCartListing = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Get a guest's cart
     */
    GuestCart.prototype.findGuestCart = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts/:cart_id", method: "GET" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Update a guest's cart
     */
    GuestCart.prototype.updateGuestCart = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts/:cart_id", method: "PUT" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    /**
     * Delete a guest's cart
     */
    GuestCart.prototype.deleteGuestCart = function (params, oauth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Request_1.request(__assign(__assign({}, this.config), { url: "/guests/:guest_id/carts/:cart_id", method: "DELETE" }), params, __assign({ apiKeys: this.apiKeys }, oauth))];
            });
        });
    };
    return GuestCart;
}());
exports.GuestCart = GuestCart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3Vlc3RDYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS9HdWVzdENhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBNEM7QUFtSTVDLGVBQWU7QUFDZjtJQUNJLG1CQUNxQixNQUEwQixFQUMxQixPQUFzQjtRQUR0QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBRTNDLENBQUM7SUFHRDs7T0FFRztJQUNHLHFDQUFpQixHQUF2QixVQUNJLE1BQTBELEVBQzFELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLHlCQUF5QixFQUM5QixNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csa0NBQWMsR0FBcEIsVUFDSSxNQUF1RCxFQUN2RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSx5QkFBeUIsRUFDOUIsTUFBTSxFQUFFLE1BQU0sS0FDZixNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLGtEQUE4QixHQUFwQyxVQUNJLE1BQXVFLEVBQ3ZFLEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLHlCQUF5QixFQUM5QixNQUFNLEVBQUUsS0FBSyxLQUNkLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csMENBQXNCLEdBQTVCLFVBQ0ksTUFBK0QsRUFDL0QsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUseUJBQXlCLEVBQzlCLE1BQU0sRUFBRSxRQUFRLEtBQ2pCLE1BQU0sV0FBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUssS0FBSyxFQUFFLEVBQUM7OztLQUN0RDtJQUVEOztPQUVHO0lBQ0csaUNBQWEsR0FBbkIsVUFDSSxNQUFzRCxFQUN0RCxLQUFvQjs7O2dCQUVwQixzQkFBTyxpQkFBTyx1QkFDUCxJQUFJLENBQUMsTUFBTSxLQUNkLEdBQUcsRUFBRSxrQ0FBa0MsRUFDdkMsTUFBTSxFQUFFLEtBQUssS0FDZCxNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFFRDs7T0FFRztJQUNHLG1DQUFlLEdBQXJCLFVBQ0ksTUFBd0QsRUFDeEQsS0FBb0I7OztnQkFFcEIsc0JBQU8saUJBQU8sdUJBQ1AsSUFBSSxDQUFDLE1BQU0sS0FDZCxHQUFHLEVBQUUsa0NBQWtDLEVBQ3ZDLE1BQU0sRUFBRSxLQUFLLEtBQ2QsTUFBTSxXQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBSyxLQUFLLEVBQUUsRUFBQzs7O0tBQ3REO0lBRUQ7O09BRUc7SUFDRyxtQ0FBZSxHQUFyQixVQUNJLE1BQXdELEVBQ3hELEtBQW9COzs7Z0JBRXBCLHNCQUFPLGlCQUFPLHVCQUNQLElBQUksQ0FBQyxNQUFNLEtBQ2QsR0FBRyxFQUFFLGtDQUFrQyxFQUN2QyxNQUFNLEVBQUUsUUFBUSxLQUNqQixNQUFNLFdBQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFLLEtBQUssRUFBRSxFQUFDOzs7S0FDdEQ7SUFDTCxnQkFBQztBQUFELENBQUMsQUF6R0QsSUF5R0M7QUF6R1ksOEJBQVMifQ==