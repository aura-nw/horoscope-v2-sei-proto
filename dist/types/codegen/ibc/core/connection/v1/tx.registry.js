import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
export const registry = [["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: MsgConnectionOpenInit.encode(value).finish()
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: MsgConnectionOpenTry.encode(value).finish()
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: MsgConnectionOpenAck.encode(value).finish()
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: MsgConnectionOpenConfirm.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value
            };
        }
    },
    toJSON: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: MsgConnectionOpenInit.toJSON(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: MsgConnectionOpenTry.toJSON(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: MsgConnectionOpenAck.toJSON(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: MsgConnectionOpenConfirm.toJSON(value)
            };
        }
    },
    fromJSON: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: MsgConnectionOpenInit.fromJSON(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: MsgConnectionOpenTry.fromJSON(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: MsgConnectionOpenAck.fromJSON(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: MsgConnectionOpenConfirm.fromJSON(value)
            };
        }
    },
    fromPartial: {
        connectionOpenInit(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: MsgConnectionOpenInit.fromPartial(value)
            };
        },
        connectionOpenTry(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: MsgConnectionOpenTry.fromPartial(value)
            };
        },
        connectionOpenAck(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: MsgConnectionOpenAck.fromPartial(value)
            };
        },
        connectionOpenConfirm(value) {
            return {
                typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: MsgConnectionOpenConfirm.fromPartial(value)
            };
        }
    }
};
