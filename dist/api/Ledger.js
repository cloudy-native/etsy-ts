"use strict";
class Ledger {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Shop Payment Account Ledger
     */
    findLedger(parameters) {
        return this.client.http("/shops/:shop_id/ledger/", parameters, "GET");
    }
}
exports.Ledger = Ledger;