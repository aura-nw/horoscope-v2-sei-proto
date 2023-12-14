import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export const registry = [["/cosmos.authz.v1beta1.MsgGrant", MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: MsgGrant.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: MsgExec.encode(value).finish()
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: MsgRevoke.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value
            };
        }
    },
    toJSON: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: MsgGrant.toJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: MsgExec.toJSON(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: MsgRevoke.toJSON(value)
            };
        }
    },
    fromJSON: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: MsgGrant.fromJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: MsgExec.fromJSON(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: MsgRevoke.fromJSON(value)
            };
        }
    },
    fromPartial: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: MsgGrant.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: MsgExec.fromPartial(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: MsgRevoke.fromPartial(value)
            };
        }
    }
};
