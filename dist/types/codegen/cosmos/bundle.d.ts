import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/v1beta1/auth";
import * as _6 from "./auth/v1beta1/genesis";
import * as _7 from "./auth/v1beta1/query";
import * as _8 from "./authz/v1beta1/authz";
import * as _9 from "./authz/v1beta1/event";
import * as _10 from "./authz/v1beta1/genesis";
import * as _11 from "./authz/v1beta1/query";
import * as _12 from "./authz/v1beta1/tx";
import * as _13 from "./bank/v1beta1/authz";
import * as _14 from "./bank/v1beta1/bank";
import * as _15 from "./bank/v1beta1/genesis";
import * as _16 from "./bank/v1beta1/query";
import * as _17 from "./bank/v1beta1/tx";
import * as _18 from "./base/abci/v1beta1/abci";
import * as _19 from "./base/kv/v1beta1/kv";
import * as _20 from "./base/query/v1beta1/pagination";
import * as _21 from "./base/reflection/v1beta1/reflection";
import * as _22 from "./base/reflection/v2alpha1/reflection";
import * as _23 from "./base/snapshots/v1beta1/snapshot";
import * as _24 from "./base/store/v1beta1/commit_info";
import * as _25 from "./base/store/v1beta1/listening";
import * as _26 from "./base/tendermint/v1beta1/query";
import * as _27 from "./base/v1beta1/coin";
import * as _28 from "./capability/v1beta1/capability";
import * as _29 from "./capability/v1beta1/genesis";
import * as _30 from "./crisis/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/tx";
import * as _32 from "./crypto/ed25519/keys";
import * as _33 from "./crypto/hd/v1/hd";
import * as _34 from "./crypto/keyring/v1/record";
import * as _35 from "./crypto/multisig/keys";
import * as _36 from "./crypto/secp256k1/keys";
import * as _37 from "./crypto/secp256r1/keys";
import * as _38 from "./distribution/v1beta1/distribution";
import * as _39 from "./distribution/v1beta1/genesis";
import * as _40 from "./distribution/v1beta1/query";
import * as _41 from "./distribution/v1beta1/tx";
import * as _42 from "./evidence/v1beta1/evidence";
import * as _43 from "./evidence/v1beta1/genesis";
import * as _44 from "./evidence/v1beta1/query";
import * as _45 from "./evidence/v1beta1/tx";
import * as _46 from "./feegrant/v1beta1/feegrant";
import * as _47 from "./feegrant/v1beta1/genesis";
import * as _48 from "./feegrant/v1beta1/query";
import * as _49 from "./feegrant/v1beta1/tx";
import * as _50 from "./genutil/v1beta1/genesis";
import * as _51 from "./gov/v1/genesis";
import * as _52 from "./gov/v1/gov";
import * as _53 from "./gov/v1/query";
import * as _54 from "./gov/v1/tx";
import * as _55 from "./gov/v1beta1/genesis";
import * as _56 from "./gov/v1beta1/gov";
import * as _57 from "./gov/v1beta1/query";
import * as _58 from "./gov/v1beta1/tx";
import * as _59 from "./group/v1/events";
import * as _60 from "./group/v1/genesis";
import * as _61 from "./group/v1/query";
import * as _62 from "./group/v1/tx";
import * as _63 from "./group/v1/types";
import * as _64 from "./mint/v1beta1/genesis";
import * as _65 from "./mint/v1beta1/mint";
import * as _66 from "./mint/v1beta1/query";
import * as _68 from "./nft/v1beta1/event";
import * as _69 from "./nft/v1beta1/genesis";
import * as _70 from "./nft/v1beta1/nft";
import * as _71 from "./nft/v1beta1/query";
import * as _72 from "./nft/v1beta1/tx";
import * as _73 from "./orm/v1/orm";
import * as _74 from "./orm/v1alpha1/schema";
import * as _75 from "./params/v1beta1/params";
import * as _76 from "./params/v1beta1/query";
import * as _77 from "./slashing/v1beta1/genesis";
import * as _78 from "./slashing/v1beta1/query";
import * as _79 from "./slashing/v1beta1/slashing";
import * as _80 from "./slashing/v1beta1/tx";
import * as _81 from "./staking/v1beta1/authz";
import * as _82 from "./staking/v1beta1/genesis";
import * as _83 from "./staking/v1beta1/query";
import * as _84 from "./staking/v1beta1/staking";
import * as _85 from "./staking/v1beta1/tx";
import * as _86 from "./tx/signing/v1beta1/signing";
import * as _87 from "./tx/v1beta1/service";
import * as _88 from "./tx/v1beta1/tx";
import * as _89 from "./upgrade/v1beta1/query";
import * as _90 from "./upgrade/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/upgrade";
import * as _92 from "./vesting/v1beta1/tx";
import * as _93 from "./vesting/v1beta1/vesting";
import * as _245 from "./auth/v1beta1/query.lcd";
import * as _246 from "./authz/v1beta1/query.lcd";
import * as _247 from "./bank/v1beta1/query.lcd";
import * as _248 from "./base/tendermint/v1beta1/query.lcd";
import * as _249 from "./distribution/v1beta1/query.lcd";
import * as _250 from "./evidence/v1beta1/query.lcd";
import * as _251 from "./feegrant/v1beta1/query.lcd";
import * as _252 from "./gov/v1/query.lcd";
import * as _253 from "./gov/v1beta1/query.lcd";
import * as _254 from "./group/v1/query.lcd";
import * as _255 from "./mint/v1beta1/query.lcd";
import * as _256 from "./nft/v1beta1/query.lcd";
import * as _257 from "./params/v1beta1/query.lcd";
import * as _258 from "./slashing/v1beta1/query.lcd";
import * as _259 from "./staking/v1beta1/query.lcd";
import * as _260 from "./tx/v1beta1/service.lcd";
import * as _261 from "./upgrade/v1beta1/query.lcd";
import * as _262 from "./app/v1alpha1/query.rpc.Query";
import * as _263 from "./auth/v1beta1/query.rpc.Query";
import * as _264 from "./authz/v1beta1/query.rpc.Query";
import * as _265 from "./bank/v1beta1/query.rpc.Query";
import * as _266 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _267 from "./distribution/v1beta1/query.rpc.Query";
import * as _268 from "./evidence/v1beta1/query.rpc.Query";
import * as _269 from "./feegrant/v1beta1/query.rpc.Query";
import * as _270 from "./gov/v1/query.rpc.Query";
import * as _271 from "./gov/v1beta1/query.rpc.Query";
import * as _272 from "./group/v1/query.rpc.Query";
import * as _273 from "./mint/v1beta1/query.rpc.Query";
import * as _274 from "./nft/v1beta1/query.rpc.Query";
import * as _275 from "./params/v1beta1/query.rpc.Query";
import * as _276 from "./slashing/v1beta1/query.rpc.Query";
import * as _277 from "./staking/v1beta1/query.rpc.Query";
import * as _278 from "./tx/v1beta1/service.rpc.Service";
import * as _279 from "./upgrade/v1beta1/query.rpc.Query";
import * as _280 from "./authz/v1beta1/tx.rpc.msg";
import * as _281 from "./bank/v1beta1/tx.rpc.msg";
import * as _282 from "./crisis/v1beta1/tx.rpc.msg";
import * as _283 from "./distribution/v1beta1/tx.rpc.msg";
import * as _284 from "./evidence/v1beta1/tx.rpc.msg";
import * as _285 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _286 from "./gov/v1/tx.rpc.msg";
import * as _287 from "./gov/v1beta1/tx.rpc.msg";
import * as _288 from "./group/v1/tx.rpc.msg";
import * as _289 from "./nft/v1beta1/tx.rpc.msg";
import * as _290 from "./slashing/v1beta1/tx.rpc.msg";
import * as _291 from "./staking/v1beta1/tx.rpc.msg";
import * as _292 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _293 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _4.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigRequest;
                fromJSON(_: any): _4.QueryConfigRequest;
                toJSON(_: _4.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_4.QueryConfigRequest>): _4.QueryConfigRequest;
                fromAmino(_: _4.QueryConfigRequestAmino): _4.QueryConfigRequest;
                toAmino(_: _4.QueryConfigRequest): _4.QueryConfigRequestAmino;
                fromAminoMsg(object: _4.QueryConfigRequestAminoMsg): _4.QueryConfigRequest;
                toAminoMsg(message: _4.QueryConfigRequest): _4.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _4.QueryConfigRequestProtoMsg): _4.QueryConfigRequest;
                toProto(message: _4.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _4.QueryConfigRequest): _4.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _4.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryConfigResponse;
                fromJSON(object: any): _4.QueryConfigResponse;
                toJSON(message: _4.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_4.QueryConfigResponse>): _4.QueryConfigResponse;
                fromAmino(object: _4.QueryConfigResponseAmino): _4.QueryConfigResponse;
                toAmino(message: _4.QueryConfigResponse): _4.QueryConfigResponseAmino;
                fromAminoMsg(object: _4.QueryConfigResponseAminoMsg): _4.QueryConfigResponse;
                toAminoMsg(message: _4.QueryConfigResponse): _4.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _4.QueryConfigResponseProtoMsg): _4.QueryConfigResponse;
                toProto(message: _4.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _4.QueryConfigResponse): _4.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _3.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleDescriptor;
                fromJSON(object: any): _3.ModuleDescriptor;
                toJSON(message: _3.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_3.ModuleDescriptor>): _3.ModuleDescriptor;
                fromAmino(object: _3.ModuleDescriptorAmino): _3.ModuleDescriptor;
                toAmino(message: _3.ModuleDescriptor): _3.ModuleDescriptorAmino;
                fromAminoMsg(object: _3.ModuleDescriptorAminoMsg): _3.ModuleDescriptor;
                toAminoMsg(message: _3.ModuleDescriptor): _3.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _3.ModuleDescriptorProtoMsg): _3.ModuleDescriptor;
                toProto(message: _3.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _3.ModuleDescriptor): _3.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _3.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.PackageReference;
                fromJSON(object: any): _3.PackageReference;
                toJSON(message: _3.PackageReference): unknown;
                fromPartial(object: Partial<_3.PackageReference>): _3.PackageReference;
                fromAmino(object: _3.PackageReferenceAmino): _3.PackageReference;
                toAmino(message: _3.PackageReference): _3.PackageReferenceAmino;
                fromAminoMsg(object: _3.PackageReferenceAminoMsg): _3.PackageReference;
                toAminoMsg(message: _3.PackageReference): _3.PackageReferenceAminoMsg;
                fromProtoMsg(message: _3.PackageReferenceProtoMsg): _3.PackageReference;
                toProto(message: _3.PackageReference): Uint8Array;
                toProtoMsg(message: _3.PackageReference): _3.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _3.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MigrateFromInfo;
                fromJSON(object: any): _3.MigrateFromInfo;
                toJSON(message: _3.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_3.MigrateFromInfo>): _3.MigrateFromInfo;
                fromAmino(object: _3.MigrateFromInfoAmino): _3.MigrateFromInfo;
                toAmino(message: _3.MigrateFromInfo): _3.MigrateFromInfoAmino;
                fromAminoMsg(object: _3.MigrateFromInfoAminoMsg): _3.MigrateFromInfo;
                toAminoMsg(message: _3.MigrateFromInfo): _3.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _3.MigrateFromInfoProtoMsg): _3.MigrateFromInfo;
                toProto(message: _3.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _3.MigrateFromInfo): _3.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _2.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Config;
                fromJSON(object: any): _2.Config;
                toJSON(message: _2.Config): unknown;
                fromPartial(object: Partial<_2.Config>): _2.Config;
                fromAmino(object: _2.ConfigAmino): _2.Config;
                toAmino(message: _2.Config): _2.ConfigAmino;
                fromAminoMsg(object: _2.ConfigAminoMsg): _2.Config;
                toAminoMsg(message: _2.Config): _2.ConfigAminoMsg;
                fromProtoMsg(message: _2.ConfigProtoMsg): _2.Config;
                toProto(message: _2.Config): Uint8Array;
                toProtoMsg(message: _2.Config): _2.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _2.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleConfig;
                fromJSON(object: any): _2.ModuleConfig;
                toJSON(message: _2.ModuleConfig): unknown;
                fromPartial(object: Partial<_2.ModuleConfig>): _2.ModuleConfig;
                fromAmino(object: _2.ModuleConfigAmino): _2.ModuleConfig;
                toAmino(message: _2.ModuleConfig): _2.ModuleConfigAmino;
                fromAminoMsg(object: _2.ModuleConfigAminoMsg): _2.ModuleConfig;
                toAminoMsg(message: _2.ModuleConfig): _2.ModuleConfigAminoMsg;
                fromProtoMsg(message: _2.ModuleConfigProtoMsg): _2.ModuleConfig;
                toProto(message: _2.ModuleConfig): Uint8Array;
                toProtoMsg(message: _2.ModuleConfig): _2.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _7.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsRequest;
                fromJSON(object: any): _7.QueryAccountsRequest;
                toJSON(message: _7.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountsRequest>): _7.QueryAccountsRequest;
                fromAmino(object: _7.QueryAccountsRequestAmino): _7.QueryAccountsRequest;
                toAmino(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestAmino;
                fromAminoMsg(object: _7.QueryAccountsRequestAminoMsg): _7.QueryAccountsRequest;
                toAminoMsg(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryAccountsRequestProtoMsg): _7.QueryAccountsRequest;
                toProto(message: _7.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryAccountsRequest): _7.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountsResponse;
                fromJSON(object: any): _7.QueryAccountsResponse;
                toJSON(message: _7.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountsResponse>): _7.QueryAccountsResponse;
                fromAmino(object: _7.QueryAccountsResponseAmino): _7.QueryAccountsResponse;
                toAmino(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseAmino;
                fromAminoMsg(object: _7.QueryAccountsResponseAminoMsg): _7.QueryAccountsResponse;
                toAminoMsg(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryAccountsResponseProtoMsg): _7.QueryAccountsResponse;
                toProto(message: _7.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountsResponse): _7.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _7.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountRequest;
                fromJSON(object: any): _7.QueryAccountRequest;
                toJSON(message: _7.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_7.QueryAccountRequest>): _7.QueryAccountRequest;
                fromAmino(object: _7.QueryAccountRequestAmino): _7.QueryAccountRequest;
                toAmino(message: _7.QueryAccountRequest): _7.QueryAccountRequestAmino;
                fromAminoMsg(object: _7.QueryAccountRequestAminoMsg): _7.QueryAccountRequest;
                toAminoMsg(message: _7.QueryAccountRequest): _7.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _7.QueryAccountRequestProtoMsg): _7.QueryAccountRequest;
                toProto(message: _7.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _7.QueryAccountRequest): _7.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _7.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsRequest;
                fromJSON(_: any): _7.QueryModuleAccountsRequest;
                toJSON(_: _7.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_7.QueryModuleAccountsRequest>): _7.QueryModuleAccountsRequest;
                fromAmino(_: _7.QueryModuleAccountsRequestAmino): _7.QueryModuleAccountsRequest;
                toAmino(_: _7.QueryModuleAccountsRequest): _7.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _7.QueryModuleAccountsRequestAminoMsg): _7.QueryModuleAccountsRequest;
                toAminoMsg(message: _7.QueryModuleAccountsRequest): _7.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryModuleAccountsRequestProtoMsg): _7.QueryModuleAccountsRequest;
                toProto(message: _7.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryModuleAccountsRequest): _7.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _7.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsResponse;
                fromJSON(object: any): _7.QueryParamsResponse;
                toJSON(message: _7.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_7.QueryParamsResponse>): _7.QueryParamsResponse;
                fromAmino(object: _7.QueryParamsResponseAmino): _7.QueryParamsResponse;
                toAmino(message: _7.QueryParamsResponse): _7.QueryParamsResponseAmino;
                fromAminoMsg(object: _7.QueryParamsResponseAminoMsg): _7.QueryParamsResponse;
                toAminoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryParamsResponseProtoMsg): _7.QueryParamsResponse;
                toProto(message: _7.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryParamsResponse): _7.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _7.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryAccountResponse;
                fromJSON(object: any): _7.QueryAccountResponse;
                toJSON(message: _7.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_7.QueryAccountResponse>): _7.QueryAccountResponse;
                fromAmino(object: _7.QueryAccountResponseAmino): _7.QueryAccountResponse;
                toAmino(message: _7.QueryAccountResponse): _7.QueryAccountResponseAmino;
                fromAminoMsg(object: _7.QueryAccountResponseAminoMsg): _7.QueryAccountResponse;
                toAminoMsg(message: _7.QueryAccountResponse): _7.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _7.QueryAccountResponseProtoMsg): _7.QueryAccountResponse;
                toProto(message: _7.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _7.QueryAccountResponse): _7.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _7.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryParamsRequest;
                fromJSON(_: any): _7.QueryParamsRequest;
                toJSON(_: _7.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_7.QueryParamsRequest>): _7.QueryParamsRequest;
                fromAmino(_: _7.QueryParamsRequestAmino): _7.QueryParamsRequest;
                toAmino(_: _7.QueryParamsRequest): _7.QueryParamsRequestAmino;
                fromAminoMsg(object: _7.QueryParamsRequestAminoMsg): _7.QueryParamsRequest;
                toAminoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryParamsRequestProtoMsg): _7.QueryParamsRequest;
                toProto(message: _7.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryParamsRequest): _7.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _7.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryModuleAccountsResponse;
                fromJSON(object: any): _7.QueryModuleAccountsResponse;
                toJSON(message: _7.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_7.QueryModuleAccountsResponse>): _7.QueryModuleAccountsResponse;
                fromAmino(object: _7.QueryModuleAccountsResponseAmino): _7.QueryModuleAccountsResponse;
                toAmino(message: _7.QueryModuleAccountsResponse): _7.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _7.QueryModuleAccountsResponseAminoMsg): _7.QueryModuleAccountsResponse;
                toAminoMsg(message: _7.QueryModuleAccountsResponse): _7.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryModuleAccountsResponseProtoMsg): _7.QueryModuleAccountsResponse;
                toProto(message: _7.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryModuleAccountsResponse): _7.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _7.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixRequest;
                fromJSON(_: any): _7.Bech32PrefixRequest;
                toJSON(_: _7.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_7.Bech32PrefixRequest>): _7.Bech32PrefixRequest;
                fromAmino(_: _7.Bech32PrefixRequestAmino): _7.Bech32PrefixRequest;
                toAmino(_: _7.Bech32PrefixRequest): _7.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _7.Bech32PrefixRequestAminoMsg): _7.Bech32PrefixRequest;
                toAminoMsg(message: _7.Bech32PrefixRequest): _7.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _7.Bech32PrefixRequestProtoMsg): _7.Bech32PrefixRequest;
                toProto(message: _7.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _7.Bech32PrefixRequest): _7.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _7.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Bech32PrefixResponse;
                fromJSON(object: any): _7.Bech32PrefixResponse;
                toJSON(message: _7.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_7.Bech32PrefixResponse>): _7.Bech32PrefixResponse;
                fromAmino(object: _7.Bech32PrefixResponseAmino): _7.Bech32PrefixResponse;
                toAmino(message: _7.Bech32PrefixResponse): _7.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _7.Bech32PrefixResponseAminoMsg): _7.Bech32PrefixResponse;
                toAminoMsg(message: _7.Bech32PrefixResponse): _7.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _7.Bech32PrefixResponseProtoMsg): _7.Bech32PrefixResponse;
                toProto(message: _7.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _7.Bech32PrefixResponse): _7.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _7.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringRequest;
                fromJSON(object: any): _7.AddressBytesToStringRequest;
                toJSON(message: _7.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringRequest>): _7.AddressBytesToStringRequest;
                fromAmino(object: _7.AddressBytesToStringRequestAmino): _7.AddressBytesToStringRequest;
                toAmino(message: _7.AddressBytesToStringRequest): _7.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _7.AddressBytesToStringRequestAminoMsg): _7.AddressBytesToStringRequest;
                toAminoMsg(message: _7.AddressBytesToStringRequest): _7.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _7.AddressBytesToStringRequestProtoMsg): _7.AddressBytesToStringRequest;
                toProto(message: _7.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _7.AddressBytesToStringRequest): _7.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _7.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressBytesToStringResponse;
                fromJSON(object: any): _7.AddressBytesToStringResponse;
                toJSON(message: _7.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_7.AddressBytesToStringResponse>): _7.AddressBytesToStringResponse;
                fromAmino(object: _7.AddressBytesToStringResponseAmino): _7.AddressBytesToStringResponse;
                toAmino(message: _7.AddressBytesToStringResponse): _7.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _7.AddressBytesToStringResponseAminoMsg): _7.AddressBytesToStringResponse;
                toAminoMsg(message: _7.AddressBytesToStringResponse): _7.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _7.AddressBytesToStringResponseProtoMsg): _7.AddressBytesToStringResponse;
                toProto(message: _7.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _7.AddressBytesToStringResponse): _7.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _7.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesRequest;
                fromJSON(object: any): _7.AddressStringToBytesRequest;
                toJSON(message: _7.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesRequest>): _7.AddressStringToBytesRequest;
                fromAmino(object: _7.AddressStringToBytesRequestAmino): _7.AddressStringToBytesRequest;
                toAmino(message: _7.AddressStringToBytesRequest): _7.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _7.AddressStringToBytesRequestAminoMsg): _7.AddressStringToBytesRequest;
                toAminoMsg(message: _7.AddressStringToBytesRequest): _7.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _7.AddressStringToBytesRequestProtoMsg): _7.AddressStringToBytesRequest;
                toProto(message: _7.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _7.AddressStringToBytesRequest): _7.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _7.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.AddressStringToBytesResponse;
                fromJSON(object: any): _7.AddressStringToBytesResponse;
                toJSON(message: _7.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_7.AddressStringToBytesResponse>): _7.AddressStringToBytesResponse;
                fromAmino(object: _7.AddressStringToBytesResponseAmino): _7.AddressStringToBytesResponse;
                toAmino(message: _7.AddressStringToBytesResponse): _7.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _7.AddressStringToBytesResponseAminoMsg): _7.AddressStringToBytesResponse;
                toAminoMsg(message: _7.AddressStringToBytesResponse): _7.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _7.AddressStringToBytesResponseProtoMsg): _7.AddressStringToBytesResponse;
                toProto(message: _7.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _7.AddressStringToBytesResponse): _7.AddressStringToBytesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                toAminoMsg(message: _6.GenesisState): _6.GenesisStateAminoMsg;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _5.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.BaseAccount;
                fromJSON(object: any): _5.BaseAccount;
                toJSON(message: _5.BaseAccount): unknown;
                fromPartial(object: Partial<_5.BaseAccount>): _5.BaseAccount;
                fromAmino(object: _5.BaseAccountAmino): _5.BaseAccount;
                toAmino(message: _5.BaseAccount): _5.BaseAccountAmino;
                fromAminoMsg(object: _5.BaseAccountAminoMsg): _5.BaseAccount;
                toAminoMsg(message: _5.BaseAccount): _5.BaseAccountAminoMsg;
                fromProtoMsg(message: _5.BaseAccountProtoMsg): _5.BaseAccount;
                toProto(message: _5.BaseAccount): Uint8Array;
                toProtoMsg(message: _5.BaseAccount): _5.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _5.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ModuleAccount;
                fromJSON(object: any): _5.ModuleAccount;
                toJSON(message: _5.ModuleAccount): unknown;
                fromPartial(object: Partial<_5.ModuleAccount>): _5.ModuleAccount;
                fromAmino(object: _5.ModuleAccountAmino): _5.ModuleAccount;
                toAmino(message: _5.ModuleAccount): _5.ModuleAccountAmino;
                fromAminoMsg(object: _5.ModuleAccountAminoMsg): _5.ModuleAccount;
                toAminoMsg(message: _5.ModuleAccount): _5.ModuleAccountAminoMsg;
                fromProtoMsg(message: _5.ModuleAccountProtoMsg): _5.ModuleAccount;
                toProto(message: _5.ModuleAccount): Uint8Array;
                toProtoMsg(message: _5.ModuleAccount): _5.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _5.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Params;
                fromJSON(object: any): _5.Params;
                toJSON(message: _5.Params): unknown;
                fromPartial(object: Partial<_5.Params>): _5.Params;
                fromAmino(object: _5.ParamsAmino): _5.Params;
                toAmino(message: _5.Params): _5.ParamsAmino;
                fromAminoMsg(object: _5.ParamsAminoMsg): _5.Params;
                toAminoMsg(message: _5.Params): _5.ParamsAminoMsg;
                fromProtoMsg(message: _5.ParamsProtoMsg): _5.Params;
                toProto(message: _5.Params): Uint8Array;
                toProtoMsg(message: _5.Params): _5.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _12.MsgGrant): {
                        typeUrl: string;
                        value: _12.MsgGrant;
                    };
                    exec(value: _12.MsgExec): {
                        typeUrl: string;
                        value: _12.MsgExec;
                    };
                    revoke(value: _12.MsgRevoke): {
                        typeUrl: string;
                        value: _12.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _12.MsgGrant) => _12.MsgGrantAmino;
                    fromAmino: (object: _12.MsgGrantAmino) => _12.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _12.MsgExec) => _12.MsgExecAmino;
                    fromAmino: (object: _12.MsgExecAmino) => _12.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _12.MsgRevoke) => _12.MsgRevokeAmino;
                    fromAmino: (object: _12.MsgRevokeAmino) => _12.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _12.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrant;
                fromJSON(object: any): _12.MsgGrant;
                toJSON(message: _12.MsgGrant): unknown;
                fromPartial(object: Partial<_12.MsgGrant>): _12.MsgGrant;
                fromAmino(object: _12.MsgGrantAmino): _12.MsgGrant;
                toAmino(message: _12.MsgGrant): _12.MsgGrantAmino;
                fromAminoMsg(object: _12.MsgGrantAminoMsg): _12.MsgGrant;
                toAminoMsg(message: _12.MsgGrant): _12.MsgGrantAminoMsg;
                fromProtoMsg(message: _12.MsgGrantProtoMsg): _12.MsgGrant;
                toProto(message: _12.MsgGrant): Uint8Array;
                toProtoMsg(message: _12.MsgGrant): _12.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _12.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExecResponse;
                fromJSON(object: any): _12.MsgExecResponse;
                toJSON(message: _12.MsgExecResponse): unknown;
                fromPartial(object: Partial<_12.MsgExecResponse>): _12.MsgExecResponse;
                fromAmino(object: _12.MsgExecResponseAmino): _12.MsgExecResponse;
                toAmino(message: _12.MsgExecResponse): _12.MsgExecResponseAmino;
                fromAminoMsg(object: _12.MsgExecResponseAminoMsg): _12.MsgExecResponse;
                toAminoMsg(message: _12.MsgExecResponse): _12.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _12.MsgExecResponseProtoMsg): _12.MsgExecResponse;
                toProto(message: _12.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _12.MsgExecResponse): _12.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _12.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgExec;
                fromJSON(object: any): _12.MsgExec;
                toJSON(message: _12.MsgExec): unknown;
                fromPartial(object: Partial<_12.MsgExec>): _12.MsgExec;
                fromAmino(object: _12.MsgExecAmino): _12.MsgExec;
                toAmino(message: _12.MsgExec): _12.MsgExecAmino;
                fromAminoMsg(object: _12.MsgExecAminoMsg): _12.MsgExec;
                toAminoMsg(message: _12.MsgExec): _12.MsgExecAminoMsg;
                fromProtoMsg(message: _12.MsgExecProtoMsg): _12.MsgExec;
                toProto(message: _12.MsgExec): Uint8Array;
                toProtoMsg(message: _12.MsgExec): _12.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _12.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgGrantResponse;
                fromJSON(_: any): _12.MsgGrantResponse;
                toJSON(_: _12.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_12.MsgGrantResponse>): _12.MsgGrantResponse;
                fromAmino(_: _12.MsgGrantResponseAmino): _12.MsgGrantResponse;
                toAmino(_: _12.MsgGrantResponse): _12.MsgGrantResponseAmino;
                fromAminoMsg(object: _12.MsgGrantResponseAminoMsg): _12.MsgGrantResponse;
                toAminoMsg(message: _12.MsgGrantResponse): _12.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _12.MsgGrantResponseProtoMsg): _12.MsgGrantResponse;
                toProto(message: _12.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _12.MsgGrantResponse): _12.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _12.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevoke;
                fromJSON(object: any): _12.MsgRevoke;
                toJSON(message: _12.MsgRevoke): unknown;
                fromPartial(object: Partial<_12.MsgRevoke>): _12.MsgRevoke;
                fromAmino(object: _12.MsgRevokeAmino): _12.MsgRevoke;
                toAmino(message: _12.MsgRevoke): _12.MsgRevokeAmino;
                fromAminoMsg(object: _12.MsgRevokeAminoMsg): _12.MsgRevoke;
                toAminoMsg(message: _12.MsgRevoke): _12.MsgRevokeAminoMsg;
                fromProtoMsg(message: _12.MsgRevokeProtoMsg): _12.MsgRevoke;
                toProto(message: _12.MsgRevoke): Uint8Array;
                toProtoMsg(message: _12.MsgRevoke): _12.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _12.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgRevokeResponse;
                fromJSON(_: any): _12.MsgRevokeResponse;
                toJSON(_: _12.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_12.MsgRevokeResponse>): _12.MsgRevokeResponse;
                fromAmino(_: _12.MsgRevokeResponseAmino): _12.MsgRevokeResponse;
                toAmino(_: _12.MsgRevokeResponse): _12.MsgRevokeResponseAmino;
                fromAminoMsg(object: _12.MsgRevokeResponseAminoMsg): _12.MsgRevokeResponse;
                toAminoMsg(message: _12.MsgRevokeResponse): _12.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _12.MsgRevokeResponseProtoMsg): _12.MsgRevokeResponse;
                toProto(message: _12.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _12.MsgRevokeResponse): _12.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsRequest;
                fromJSON(object: any): _11.QueryGrantsRequest;
                toJSON(message: _11.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGrantsRequest>): _11.QueryGrantsRequest;
                fromAmino(object: _11.QueryGrantsRequestAmino): _11.QueryGrantsRequest;
                toAmino(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGrantsRequestAminoMsg): _11.QueryGrantsRequest;
                toAminoMsg(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGrantsRequestProtoMsg): _11.QueryGrantsRequest;
                toProto(message: _11.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGrantsRequest): _11.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGrantsResponse;
                fromJSON(object: any): _11.QueryGrantsResponse;
                toJSON(message: _11.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGrantsResponse>): _11.QueryGrantsResponse;
                fromAmino(object: _11.QueryGrantsResponseAmino): _11.QueryGrantsResponse;
                toAmino(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGrantsResponseAminoMsg): _11.QueryGrantsResponse;
                toAminoMsg(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGrantsResponseProtoMsg): _11.QueryGrantsResponse;
                toProto(message: _11.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGrantsResponse): _11.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsRequest;
                fromJSON(object: any): _11.QueryGranterGrantsRequest;
                toJSON(message: _11.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsRequest>): _11.QueryGranterGrantsRequest;
                fromAmino(object: _11.QueryGranterGrantsRequestAmino): _11.QueryGranterGrantsRequest;
                toAmino(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGranterGrantsRequestAminoMsg): _11.QueryGranterGrantsRequest;
                toAminoMsg(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGranterGrantsRequestProtoMsg): _11.QueryGranterGrantsRequest;
                toProto(message: _11.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGranterGrantsRequest): _11.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranterGrantsResponse;
                fromJSON(object: any): _11.QueryGranterGrantsResponse;
                toJSON(message: _11.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranterGrantsResponse>): _11.QueryGranterGrantsResponse;
                fromAmino(object: _11.QueryGranterGrantsResponseAmino): _11.QueryGranterGrantsResponse;
                toAmino(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGranterGrantsResponseAminoMsg): _11.QueryGranterGrantsResponse;
                toAminoMsg(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGranterGrantsResponseProtoMsg): _11.QueryGranterGrantsResponse;
                toProto(message: _11.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGranterGrantsResponse): _11.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _11.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsRequest;
                fromJSON(object: any): _11.QueryGranteeGrantsRequest;
                toJSON(message: _11.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsRequest>): _11.QueryGranteeGrantsRequest;
                fromAmino(object: _11.QueryGranteeGrantsRequestAmino): _11.QueryGranteeGrantsRequest;
                toAmino(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _11.QueryGranteeGrantsRequestAminoMsg): _11.QueryGranteeGrantsRequest;
                toAminoMsg(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _11.QueryGranteeGrantsRequestProtoMsg): _11.QueryGranteeGrantsRequest;
                toProto(message: _11.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGranteeGrantsRequest): _11.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _11.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryGranteeGrantsResponse;
                fromJSON(object: any): _11.QueryGranteeGrantsResponse;
                toJSON(message: _11.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_11.QueryGranteeGrantsResponse>): _11.QueryGranteeGrantsResponse;
                fromAmino(object: _11.QueryGranteeGrantsResponseAmino): _11.QueryGranteeGrantsResponse;
                toAmino(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _11.QueryGranteeGrantsResponseAminoMsg): _11.QueryGranteeGrantsResponse;
                toAminoMsg(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _11.QueryGranteeGrantsResponseProtoMsg): _11.QueryGranteeGrantsResponse;
                toProto(message: _11.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGranteeGrantsResponse): _11.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: Partial<_10.GenesisState>): _10.GenesisState;
                fromAmino(object: _10.GenesisStateAmino): _10.GenesisState;
                toAmino(message: _10.GenesisState): _10.GenesisStateAmino;
                fromAminoMsg(object: _10.GenesisStateAminoMsg): _10.GenesisState;
                toAminoMsg(message: _10.GenesisState): _10.GenesisStateAminoMsg;
                fromProtoMsg(message: _10.GenesisStateProtoMsg): _10.GenesisState;
                toProto(message: _10.GenesisState): Uint8Array;
                toProtoMsg(message: _10.GenesisState): _10.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _9.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventGrant;
                fromJSON(object: any): _9.EventGrant;
                toJSON(message: _9.EventGrant): unknown;
                fromPartial(object: Partial<_9.EventGrant>): _9.EventGrant;
                fromAmino(object: _9.EventGrantAmino): _9.EventGrant;
                toAmino(message: _9.EventGrant): _9.EventGrantAmino;
                fromAminoMsg(object: _9.EventGrantAminoMsg): _9.EventGrant;
                toAminoMsg(message: _9.EventGrant): _9.EventGrantAminoMsg;
                fromProtoMsg(message: _9.EventGrantProtoMsg): _9.EventGrant;
                toProto(message: _9.EventGrant): Uint8Array;
                toProtoMsg(message: _9.EventGrant): _9.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _9.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.EventRevoke;
                fromJSON(object: any): _9.EventRevoke;
                toJSON(message: _9.EventRevoke): unknown;
                fromPartial(object: Partial<_9.EventRevoke>): _9.EventRevoke;
                fromAmino(object: _9.EventRevokeAmino): _9.EventRevoke;
                toAmino(message: _9.EventRevoke): _9.EventRevokeAmino;
                fromAminoMsg(object: _9.EventRevokeAminoMsg): _9.EventRevoke;
                toAminoMsg(message: _9.EventRevoke): _9.EventRevokeAminoMsg;
                fromProtoMsg(message: _9.EventRevokeProtoMsg): _9.EventRevoke;
                toProto(message: _9.EventRevoke): Uint8Array;
                toProtoMsg(message: _9.EventRevoke): _9.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _8.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenericAuthorization;
                fromJSON(object: any): _8.GenericAuthorization;
                toJSON(message: _8.GenericAuthorization): unknown;
                fromPartial(object: Partial<_8.GenericAuthorization>): _8.GenericAuthorization;
                fromAmino(object: _8.GenericAuthorizationAmino): _8.GenericAuthorization;
                toAmino(message: _8.GenericAuthorization): _8.GenericAuthorizationAmino;
                fromAminoMsg(object: _8.GenericAuthorizationAminoMsg): _8.GenericAuthorization;
                toAminoMsg(message: _8.GenericAuthorization): _8.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _8.GenericAuthorizationProtoMsg): _8.GenericAuthorization;
                toProto(message: _8.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _8.GenericAuthorization): _8.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _8.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Grant;
                fromJSON(object: any): _8.Grant;
                toJSON(message: _8.Grant): unknown;
                fromPartial(object: Partial<_8.Grant>): _8.Grant;
                fromAmino(object: _8.GrantAmino): _8.Grant;
                toAmino(message: _8.Grant): _8.GrantAmino;
                fromAminoMsg(object: _8.GrantAminoMsg): _8.Grant;
                toAminoMsg(message: _8.Grant): _8.GrantAminoMsg;
                fromProtoMsg(message: _8.GrantProtoMsg): _8.Grant;
                toProto(message: _8.Grant): Uint8Array;
                toProtoMsg(message: _8.Grant): _8.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _8.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantAuthorization;
                fromJSON(object: any): _8.GrantAuthorization;
                toJSON(message: _8.GrantAuthorization): unknown;
                fromPartial(object: Partial<_8.GrantAuthorization>): _8.GrantAuthorization;
                fromAmino(object: _8.GrantAuthorizationAmino): _8.GrantAuthorization;
                toAmino(message: _8.GrantAuthorization): _8.GrantAuthorizationAmino;
                fromAminoMsg(object: _8.GrantAuthorizationAminoMsg): _8.GrantAuthorization;
                toAminoMsg(message: _8.GrantAuthorization): _8.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _8.GrantAuthorizationProtoMsg): _8.GrantAuthorization;
                toProto(message: _8.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _8.GrantAuthorization): _8.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _8.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GrantQueueItem;
                fromJSON(object: any): _8.GrantQueueItem;
                toJSON(message: _8.GrantQueueItem): unknown;
                fromPartial(object: Partial<_8.GrantQueueItem>): _8.GrantQueueItem;
                fromAmino(object: _8.GrantQueueItemAmino): _8.GrantQueueItem;
                toAmino(message: _8.GrantQueueItem): _8.GrantQueueItemAmino;
                fromAminoMsg(object: _8.GrantQueueItemAminoMsg): _8.GrantQueueItem;
                toAminoMsg(message: _8.GrantQueueItem): _8.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _8.GrantQueueItemProtoMsg): _8.GrantQueueItem;
                toProto(message: _8.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _8.GrantQueueItem): _8.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _281.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _17.MsgSend): {
                        typeUrl: string;
                        value: _17.MsgSend;
                    };
                    multiSend(value: _17.MsgMultiSend): {
                        typeUrl: string;
                        value: _17.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSend) => _17.MsgSendAmino;
                    fromAmino: (object: _17.MsgSendAmino) => _17.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiSend) => _17.MsgMultiSendAmino;
                    fromAmino: (object: _17.MsgMultiSendAmino) => _17.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _17.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSend;
                fromJSON(object: any): _17.MsgSend;
                toJSON(message: _17.MsgSend): unknown;
                fromPartial(object: Partial<_17.MsgSend>): _17.MsgSend;
                fromAmino(object: _17.MsgSendAmino): _17.MsgSend;
                toAmino(message: _17.MsgSend): _17.MsgSendAmino;
                fromAminoMsg(object: _17.MsgSendAminoMsg): _17.MsgSend;
                toAminoMsg(message: _17.MsgSend): _17.MsgSendAminoMsg;
                fromProtoMsg(message: _17.MsgSendProtoMsg): _17.MsgSend;
                toProto(message: _17.MsgSend): Uint8Array;
                toProtoMsg(message: _17.MsgSend): _17.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _17.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgSendResponse;
                fromJSON(_: any): _17.MsgSendResponse;
                toJSON(_: _17.MsgSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgSendResponse>): _17.MsgSendResponse;
                fromAmino(_: _17.MsgSendResponseAmino): _17.MsgSendResponse;
                toAmino(_: _17.MsgSendResponse): _17.MsgSendResponseAmino;
                fromAminoMsg(object: _17.MsgSendResponseAminoMsg): _17.MsgSendResponse;
                toAminoMsg(message: _17.MsgSendResponse): _17.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _17.MsgSendResponseProtoMsg): _17.MsgSendResponse;
                toProto(message: _17.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSendResponse): _17.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _17.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSend;
                fromJSON(object: any): _17.MsgMultiSend;
                toJSON(message: _17.MsgMultiSend): unknown;
                fromPartial(object: Partial<_17.MsgMultiSend>): _17.MsgMultiSend;
                fromAmino(object: _17.MsgMultiSendAmino): _17.MsgMultiSend;
                toAmino(message: _17.MsgMultiSend): _17.MsgMultiSendAmino;
                fromAminoMsg(object: _17.MsgMultiSendAminoMsg): _17.MsgMultiSend;
                toAminoMsg(message: _17.MsgMultiSend): _17.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _17.MsgMultiSendProtoMsg): _17.MsgMultiSend;
                toProto(message: _17.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSend): _17.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgMultiSendResponse;
                fromJSON(_: any): _17.MsgMultiSendResponse;
                toJSON(_: _17.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_17.MsgMultiSendResponse>): _17.MsgMultiSendResponse;
                fromAmino(_: _17.MsgMultiSendResponseAmino): _17.MsgMultiSendResponse;
                toAmino(_: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _17.MsgMultiSendResponseAminoMsg): _17.MsgMultiSendResponse;
                toAminoMsg(message: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _17.MsgMultiSendResponseProtoMsg): _17.MsgMultiSendResponse;
                toProto(message: _17.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSendResponse): _17.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _16.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceRequest;
                fromJSON(object: any): _16.QueryBalanceRequest;
                toJSON(message: _16.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_16.QueryBalanceRequest>): _16.QueryBalanceRequest;
                fromAmino(object: _16.QueryBalanceRequestAmino): _16.QueryBalanceRequest;
                toAmino(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestAmino;
                fromAminoMsg(object: _16.QueryBalanceRequestAminoMsg): _16.QueryBalanceRequest;
                toAminoMsg(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _16.QueryBalanceRequestProtoMsg): _16.QueryBalanceRequest;
                toProto(message: _16.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _16.QueryBalanceRequest): _16.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _16.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryBalanceResponse;
                fromJSON(object: any): _16.QueryBalanceResponse;
                toJSON(message: _16.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_16.QueryBalanceResponse>): _16.QueryBalanceResponse;
                fromAmino(object: _16.QueryBalanceResponseAmino): _16.QueryBalanceResponse;
                toAmino(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseAmino;
                fromAminoMsg(object: _16.QueryBalanceResponseAminoMsg): _16.QueryBalanceResponse;
                toAminoMsg(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _16.QueryBalanceResponseProtoMsg): _16.QueryBalanceResponse;
                toProto(message: _16.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _16.QueryBalanceResponse): _16.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _16.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesRequest;
                fromJSON(object: any): _16.QueryAllBalancesRequest;
                toJSON(message: _16.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesRequest>): _16.QueryAllBalancesRequest;
                fromAmino(object: _16.QueryAllBalancesRequestAmino): _16.QueryAllBalancesRequest;
                toAmino(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _16.QueryAllBalancesRequestAminoMsg): _16.QueryAllBalancesRequest;
                toAminoMsg(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _16.QueryAllBalancesRequestProtoMsg): _16.QueryAllBalancesRequest;
                toProto(message: _16.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _16.QueryAllBalancesRequest): _16.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _16.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAllBalancesResponse;
                fromJSON(object: any): _16.QueryAllBalancesResponse;
                toJSON(message: _16.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QueryAllBalancesResponse>): _16.QueryAllBalancesResponse;
                fromAmino(object: _16.QueryAllBalancesResponseAmino): _16.QueryAllBalancesResponse;
                toAmino(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _16.QueryAllBalancesResponseAminoMsg): _16.QueryAllBalancesResponse;
                toAminoMsg(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _16.QueryAllBalancesResponseProtoMsg): _16.QueryAllBalancesResponse;
                toProto(message: _16.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _16.QueryAllBalancesResponse): _16.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _16.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesRequest;
                fromJSON(object: any): _16.QuerySpendableBalancesRequest;
                toJSON(message: _16.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesRequest>): _16.QuerySpendableBalancesRequest;
                fromAmino(object: _16.QuerySpendableBalancesRequestAmino): _16.QuerySpendableBalancesRequest;
                toAmino(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _16.QuerySpendableBalancesRequestAminoMsg): _16.QuerySpendableBalancesRequest;
                toAminoMsg(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _16.QuerySpendableBalancesRequestProtoMsg): _16.QuerySpendableBalancesRequest;
                toProto(message: _16.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _16.QuerySpendableBalancesRequest): _16.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _16.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySpendableBalancesResponse;
                fromJSON(object: any): _16.QuerySpendableBalancesResponse;
                toJSON(message: _16.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_16.QuerySpendableBalancesResponse>): _16.QuerySpendableBalancesResponse;
                fromAmino(object: _16.QuerySpendableBalancesResponseAmino): _16.QuerySpendableBalancesResponse;
                toAmino(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _16.QuerySpendableBalancesResponseAminoMsg): _16.QuerySpendableBalancesResponse;
                toAminoMsg(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _16.QuerySpendableBalancesResponseProtoMsg): _16.QuerySpendableBalancesResponse;
                toProto(message: _16.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _16.QuerySpendableBalancesResponse): _16.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _16.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyRequest;
                fromJSON(object: any): _16.QueryTotalSupplyRequest;
                toJSON(message: _16.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyRequest>): _16.QueryTotalSupplyRequest;
                fromAmino(object: _16.QueryTotalSupplyRequestAmino): _16.QueryTotalSupplyRequest;
                toAmino(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _16.QueryTotalSupplyRequestAminoMsg): _16.QueryTotalSupplyRequest;
                toAminoMsg(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _16.QueryTotalSupplyRequestProtoMsg): _16.QueryTotalSupplyRequest;
                toProto(message: _16.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _16.QueryTotalSupplyRequest): _16.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _16.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryTotalSupplyResponse;
                fromJSON(object: any): _16.QueryTotalSupplyResponse;
                toJSON(message: _16.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_16.QueryTotalSupplyResponse>): _16.QueryTotalSupplyResponse;
                fromAmino(object: _16.QueryTotalSupplyResponseAmino): _16.QueryTotalSupplyResponse;
                toAmino(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _16.QueryTotalSupplyResponseAminoMsg): _16.QueryTotalSupplyResponse;
                toAminoMsg(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _16.QueryTotalSupplyResponseProtoMsg): _16.QueryTotalSupplyResponse;
                toProto(message: _16.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _16.QueryTotalSupplyResponse): _16.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _16.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfRequest;
                fromJSON(object: any): _16.QuerySupplyOfRequest;
                toJSON(message: _16.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfRequest>): _16.QuerySupplyOfRequest;
                fromAmino(object: _16.QuerySupplyOfRequestAmino): _16.QuerySupplyOfRequest;
                toAmino(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _16.QuerySupplyOfRequestAminoMsg): _16.QuerySupplyOfRequest;
                toAminoMsg(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _16.QuerySupplyOfRequestProtoMsg): _16.QuerySupplyOfRequest;
                toProto(message: _16.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _16.QuerySupplyOfRequest): _16.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _16.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QuerySupplyOfResponse;
                fromJSON(object: any): _16.QuerySupplyOfResponse;
                toJSON(message: _16.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_16.QuerySupplyOfResponse>): _16.QuerySupplyOfResponse;
                fromAmino(object: _16.QuerySupplyOfResponseAmino): _16.QuerySupplyOfResponse;
                toAmino(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _16.QuerySupplyOfResponseAminoMsg): _16.QuerySupplyOfResponse;
                toAminoMsg(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _16.QuerySupplyOfResponseProtoMsg): _16.QuerySupplyOfResponse;
                toProto(message: _16.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _16.QuerySupplyOfResponse): _16.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_16.QueryParamsRequest>): _16.QueryParamsRequest;
                fromAmino(_: _16.QueryParamsRequestAmino): _16.QueryParamsRequest;
                toAmino(_: _16.QueryParamsRequest): _16.QueryParamsRequestAmino;
                fromAminoMsg(object: _16.QueryParamsRequestAminoMsg): _16.QueryParamsRequest;
                toAminoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _16.QueryParamsRequestProtoMsg): _16.QueryParamsRequest;
                toProto(message: _16.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _16.QueryParamsRequest): _16.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_16.QueryParamsResponse>): _16.QueryParamsResponse;
                fromAmino(object: _16.QueryParamsResponseAmino): _16.QueryParamsResponse;
                toAmino(message: _16.QueryParamsResponse): _16.QueryParamsResponseAmino;
                fromAminoMsg(object: _16.QueryParamsResponseAminoMsg): _16.QueryParamsResponse;
                toAminoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _16.QueryParamsResponseProtoMsg): _16.QueryParamsResponse;
                toProto(message: _16.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _16.QueryParamsResponse): _16.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _16.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataRequest;
                fromJSON(object: any): _16.QueryDenomsMetadataRequest;
                toJSON(message: _16.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataRequest>): _16.QueryDenomsMetadataRequest;
                fromAmino(object: _16.QueryDenomsMetadataRequestAmino): _16.QueryDenomsMetadataRequest;
                toAmino(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _16.QueryDenomsMetadataRequestAminoMsg): _16.QueryDenomsMetadataRequest;
                toAminoMsg(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _16.QueryDenomsMetadataRequestProtoMsg): _16.QueryDenomsMetadataRequest;
                toProto(message: _16.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _16.QueryDenomsMetadataRequest): _16.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _16.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomsMetadataResponse;
                fromJSON(object: any): _16.QueryDenomsMetadataResponse;
                toJSON(message: _16.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomsMetadataResponse>): _16.QueryDenomsMetadataResponse;
                fromAmino(object: _16.QueryDenomsMetadataResponseAmino): _16.QueryDenomsMetadataResponse;
                toAmino(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _16.QueryDenomsMetadataResponseAminoMsg): _16.QueryDenomsMetadataResponse;
                toAminoMsg(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _16.QueryDenomsMetadataResponseProtoMsg): _16.QueryDenomsMetadataResponse;
                toProto(message: _16.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _16.QueryDenomsMetadataResponse): _16.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _16.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataRequest;
                fromJSON(object: any): _16.QueryDenomMetadataRequest;
                toJSON(message: _16.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataRequest>): _16.QueryDenomMetadataRequest;
                fromAmino(object: _16.QueryDenomMetadataRequestAmino): _16.QueryDenomMetadataRequest;
                toAmino(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _16.QueryDenomMetadataRequestAminoMsg): _16.QueryDenomMetadataRequest;
                toAminoMsg(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _16.QueryDenomMetadataRequestProtoMsg): _16.QueryDenomMetadataRequest;
                toProto(message: _16.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _16.QueryDenomMetadataRequest): _16.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _16.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomMetadataResponse;
                fromJSON(object: any): _16.QueryDenomMetadataResponse;
                toJSON(message: _16.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomMetadataResponse>): _16.QueryDenomMetadataResponse;
                fromAmino(object: _16.QueryDenomMetadataResponseAmino): _16.QueryDenomMetadataResponse;
                toAmino(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _16.QueryDenomMetadataResponseAminoMsg): _16.QueryDenomMetadataResponse;
                toAminoMsg(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _16.QueryDenomMetadataResponseProtoMsg): _16.QueryDenomMetadataResponse;
                toProto(message: _16.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _16.QueryDenomMetadataResponse): _16.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _16.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersRequest;
                fromJSON(object: any): _16.QueryDenomOwnersRequest;
                toJSON(message: _16.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersRequest>): _16.QueryDenomOwnersRequest;
                fromAmino(object: _16.QueryDenomOwnersRequestAmino): _16.QueryDenomOwnersRequest;
                toAmino(message: _16.QueryDenomOwnersRequest): _16.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _16.QueryDenomOwnersRequestAminoMsg): _16.QueryDenomOwnersRequest;
                toAminoMsg(message: _16.QueryDenomOwnersRequest): _16.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _16.QueryDenomOwnersRequestProtoMsg): _16.QueryDenomOwnersRequest;
                toProto(message: _16.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _16.QueryDenomOwnersRequest): _16.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _16.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DenomOwner;
                fromJSON(object: any): _16.DenomOwner;
                toJSON(message: _16.DenomOwner): unknown;
                fromPartial(object: Partial<_16.DenomOwner>): _16.DenomOwner;
                fromAmino(object: _16.DenomOwnerAmino): _16.DenomOwner;
                toAmino(message: _16.DenomOwner): _16.DenomOwnerAmino;
                fromAminoMsg(object: _16.DenomOwnerAminoMsg): _16.DenomOwner;
                toAminoMsg(message: _16.DenomOwner): _16.DenomOwnerAminoMsg;
                fromProtoMsg(message: _16.DenomOwnerProtoMsg): _16.DenomOwner;
                toProto(message: _16.DenomOwner): Uint8Array;
                toProtoMsg(message: _16.DenomOwner): _16.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _16.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryDenomOwnersResponse;
                fromJSON(object: any): _16.QueryDenomOwnersResponse;
                toJSON(message: _16.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_16.QueryDenomOwnersResponse>): _16.QueryDenomOwnersResponse;
                fromAmino(object: _16.QueryDenomOwnersResponseAmino): _16.QueryDenomOwnersResponse;
                toAmino(message: _16.QueryDenomOwnersResponse): _16.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _16.QueryDenomOwnersResponseAminoMsg): _16.QueryDenomOwnersResponse;
                toAminoMsg(message: _16.QueryDenomOwnersResponse): _16.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _16.QueryDenomOwnersResponseProtoMsg): _16.QueryDenomOwnersResponse;
                toProto(message: _16.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _16.QueryDenomOwnersResponse): _16.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: Partial<_15.GenesisState>): _15.GenesisState;
                fromAmino(object: _15.GenesisStateAmino): _15.GenesisState;
                toAmino(message: _15.GenesisState): _15.GenesisStateAmino;
                fromAminoMsg(object: _15.GenesisStateAminoMsg): _15.GenesisState;
                toAminoMsg(message: _15.GenesisState): _15.GenesisStateAminoMsg;
                fromProtoMsg(message: _15.GenesisStateProtoMsg): _15.GenesisState;
                toProto(message: _15.GenesisState): Uint8Array;
                toProtoMsg(message: _15.GenesisState): _15.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _15.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Balance;
                fromJSON(object: any): _15.Balance;
                toJSON(message: _15.Balance): unknown;
                fromPartial(object: Partial<_15.Balance>): _15.Balance;
                fromAmino(object: _15.BalanceAmino): _15.Balance;
                toAmino(message: _15.Balance): _15.BalanceAmino;
                fromAminoMsg(object: _15.BalanceAminoMsg): _15.Balance;
                toAminoMsg(message: _15.Balance): _15.BalanceAminoMsg;
                fromProtoMsg(message: _15.BalanceProtoMsg): _15.Balance;
                toProto(message: _15.Balance): Uint8Array;
                toProtoMsg(message: _15.Balance): _15.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: Partial<_14.Params>): _14.Params;
                fromAmino(object: _14.ParamsAmino): _14.Params;
                toAmino(message: _14.Params): _14.ParamsAmino;
                fromAminoMsg(object: _14.ParamsAminoMsg): _14.Params;
                toAminoMsg(message: _14.Params): _14.ParamsAminoMsg;
                fromProtoMsg(message: _14.ParamsProtoMsg): _14.Params;
                toProto(message: _14.Params): Uint8Array;
                toProtoMsg(message: _14.Params): _14.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _14.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SendEnabled;
                fromJSON(object: any): _14.SendEnabled;
                toJSON(message: _14.SendEnabled): unknown;
                fromPartial(object: Partial<_14.SendEnabled>): _14.SendEnabled;
                fromAmino(object: _14.SendEnabledAmino): _14.SendEnabled;
                toAmino(message: _14.SendEnabled): _14.SendEnabledAmino;
                fromAminoMsg(object: _14.SendEnabledAminoMsg): _14.SendEnabled;
                toAminoMsg(message: _14.SendEnabled): _14.SendEnabledAminoMsg;
                fromProtoMsg(message: _14.SendEnabledProtoMsg): _14.SendEnabled;
                toProto(message: _14.SendEnabled): Uint8Array;
                toProtoMsg(message: _14.SendEnabled): _14.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _14.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Input;
                fromJSON(object: any): _14.Input;
                toJSON(message: _14.Input): unknown;
                fromPartial(object: Partial<_14.Input>): _14.Input;
                fromAmino(object: _14.InputAmino): _14.Input;
                toAmino(message: _14.Input): _14.InputAmino;
                fromAminoMsg(object: _14.InputAminoMsg): _14.Input;
                toAminoMsg(message: _14.Input): _14.InputAminoMsg;
                fromProtoMsg(message: _14.InputProtoMsg): _14.Input;
                toProto(message: _14.Input): Uint8Array;
                toProtoMsg(message: _14.Input): _14.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _14.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Output;
                fromJSON(object: any): _14.Output;
                toJSON(message: _14.Output): unknown;
                fromPartial(object: Partial<_14.Output>): _14.Output;
                fromAmino(object: _14.OutputAmino): _14.Output;
                toAmino(message: _14.Output): _14.OutputAmino;
                fromAminoMsg(object: _14.OutputAminoMsg): _14.Output;
                toAminoMsg(message: _14.Output): _14.OutputAminoMsg;
                fromProtoMsg(message: _14.OutputProtoMsg): _14.Output;
                toProto(message: _14.Output): Uint8Array;
                toProtoMsg(message: _14.Output): _14.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _14.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Supply;
                fromJSON(object: any): _14.Supply;
                toJSON(message: _14.Supply): unknown;
                fromPartial(object: Partial<_14.Supply>): _14.Supply;
                fromAmino(object: _14.SupplyAmino): _14.Supply;
                toAmino(message: _14.Supply): _14.SupplyAmino;
                fromAminoMsg(object: _14.SupplyAminoMsg): _14.Supply;
                toAminoMsg(message: _14.Supply): _14.SupplyAminoMsg;
                fromProtoMsg(message: _14.SupplyProtoMsg): _14.Supply;
                toProto(message: _14.Supply): Uint8Array;
                toProtoMsg(message: _14.Supply): _14.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _14.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.DenomUnit;
                fromJSON(object: any): _14.DenomUnit;
                toJSON(message: _14.DenomUnit): unknown;
                fromPartial(object: Partial<_14.DenomUnit>): _14.DenomUnit;
                fromAmino(object: _14.DenomUnitAmino): _14.DenomUnit;
                toAmino(message: _14.DenomUnit): _14.DenomUnitAmino;
                fromAminoMsg(object: _14.DenomUnitAminoMsg): _14.DenomUnit;
                toAminoMsg(message: _14.DenomUnit): _14.DenomUnitAminoMsg;
                fromProtoMsg(message: _14.DenomUnitProtoMsg): _14.DenomUnit;
                toProto(message: _14.DenomUnit): Uint8Array;
                toProtoMsg(message: _14.DenomUnit): _14.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _14.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Metadata;
                fromJSON(object: any): _14.Metadata;
                toJSON(message: _14.Metadata): unknown;
                fromPartial(object: Partial<_14.Metadata>): _14.Metadata;
                fromAmino(object: _14.MetadataAmino): _14.Metadata;
                toAmino(message: _14.Metadata): _14.MetadataAmino;
                fromAminoMsg(object: _14.MetadataAminoMsg): _14.Metadata;
                toAminoMsg(message: _14.Metadata): _14.MetadataAminoMsg;
                fromProtoMsg(message: _14.MetadataProtoMsg): _14.Metadata;
                toProto(message: _14.Metadata): Uint8Array;
                toProtoMsg(message: _14.Metadata): _14.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _13.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendAuthorization;
                fromJSON(object: any): _13.SendAuthorization;
                toJSON(message: _13.SendAuthorization): unknown;
                fromPartial(object: Partial<_13.SendAuthorization>): _13.SendAuthorization;
                fromAmino(object: _13.SendAuthorizationAmino): _13.SendAuthorization;
                toAmino(message: _13.SendAuthorization): _13.SendAuthorizationAmino;
                fromAminoMsg(object: _13.SendAuthorizationAminoMsg): _13.SendAuthorization;
                toAminoMsg(message: _13.SendAuthorization): _13.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _13.SendAuthorizationProtoMsg): _13.SendAuthorization;
                toProto(message: _13.SendAuthorization): Uint8Array;
                toProtoMsg(message: _13.SendAuthorization): _13.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _18.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResponse;
                    fromJSON(object: any): _18.TxResponse;
                    toJSON(message: _18.TxResponse): unknown;
                    fromPartial(object: Partial<_18.TxResponse>): _18.TxResponse;
                    fromAmino(object: _18.TxResponseAmino): _18.TxResponse;
                    toAmino(message: _18.TxResponse): _18.TxResponseAmino;
                    fromAminoMsg(object: _18.TxResponseAminoMsg): _18.TxResponse;
                    toAminoMsg(message: _18.TxResponse): _18.TxResponseAminoMsg;
                    fromProtoMsg(message: _18.TxResponseProtoMsg): _18.TxResponse;
                    toProto(message: _18.TxResponse): Uint8Array;
                    toProtoMsg(message: _18.TxResponse): _18.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _18.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ABCIMessageLog;
                    fromJSON(object: any): _18.ABCIMessageLog;
                    toJSON(message: _18.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_18.ABCIMessageLog>): _18.ABCIMessageLog;
                    fromAmino(object: _18.ABCIMessageLogAmino): _18.ABCIMessageLog;
                    toAmino(message: _18.ABCIMessageLog): _18.ABCIMessageLogAmino;
                    fromAminoMsg(object: _18.ABCIMessageLogAminoMsg): _18.ABCIMessageLog;
                    toAminoMsg(message: _18.ABCIMessageLog): _18.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _18.ABCIMessageLogProtoMsg): _18.ABCIMessageLog;
                    toProto(message: _18.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _18.ABCIMessageLog): _18.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _18.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.StringEvent;
                    fromJSON(object: any): _18.StringEvent;
                    toJSON(message: _18.StringEvent): unknown;
                    fromPartial(object: Partial<_18.StringEvent>): _18.StringEvent;
                    fromAmino(object: _18.StringEventAmino): _18.StringEvent;
                    toAmino(message: _18.StringEvent): _18.StringEventAmino;
                    fromAminoMsg(object: _18.StringEventAminoMsg): _18.StringEvent;
                    toAminoMsg(message: _18.StringEvent): _18.StringEventAminoMsg;
                    fromProtoMsg(message: _18.StringEventProtoMsg): _18.StringEvent;
                    toProto(message: _18.StringEvent): Uint8Array;
                    toProtoMsg(message: _18.StringEvent): _18.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _18.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Attribute;
                    fromJSON(object: any): _18.Attribute;
                    toJSON(message: _18.Attribute): unknown;
                    fromPartial(object: Partial<_18.Attribute>): _18.Attribute;
                    fromAmino(object: _18.AttributeAmino): _18.Attribute;
                    toAmino(message: _18.Attribute): _18.AttributeAmino;
                    fromAminoMsg(object: _18.AttributeAminoMsg): _18.Attribute;
                    toAminoMsg(message: _18.Attribute): _18.AttributeAminoMsg;
                    fromProtoMsg(message: _18.AttributeProtoMsg): _18.Attribute;
                    toProto(message: _18.Attribute): Uint8Array;
                    toProtoMsg(message: _18.Attribute): _18.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _18.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GasInfo;
                    fromJSON(object: any): _18.GasInfo;
                    toJSON(message: _18.GasInfo): unknown;
                    fromPartial(object: Partial<_18.GasInfo>): _18.GasInfo;
                    fromAmino(object: _18.GasInfoAmino): _18.GasInfo;
                    toAmino(message: _18.GasInfo): _18.GasInfoAmino;
                    fromAminoMsg(object: _18.GasInfoAminoMsg): _18.GasInfo;
                    toAminoMsg(message: _18.GasInfo): _18.GasInfoAminoMsg;
                    fromProtoMsg(message: _18.GasInfoProtoMsg): _18.GasInfo;
                    toProto(message: _18.GasInfo): Uint8Array;
                    toProtoMsg(message: _18.GasInfo): _18.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _18.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Result;
                    fromJSON(object: any): _18.Result;
                    toJSON(message: _18.Result): unknown;
                    fromPartial(object: Partial<_18.Result>): _18.Result;
                    fromAmino(object: _18.ResultAmino): _18.Result;
                    toAmino(message: _18.Result): _18.ResultAmino;
                    fromAminoMsg(object: _18.ResultAminoMsg): _18.Result;
                    toAminoMsg(message: _18.Result): _18.ResultAminoMsg;
                    fromProtoMsg(message: _18.ResultProtoMsg): _18.Result;
                    toProto(message: _18.Result): Uint8Array;
                    toProtoMsg(message: _18.Result): _18.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _18.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SimulationResponse;
                    fromJSON(object: any): _18.SimulationResponse;
                    toJSON(message: _18.SimulationResponse): unknown;
                    fromPartial(object: Partial<_18.SimulationResponse>): _18.SimulationResponse;
                    fromAmino(object: _18.SimulationResponseAmino): _18.SimulationResponse;
                    toAmino(message: _18.SimulationResponse): _18.SimulationResponseAmino;
                    fromAminoMsg(object: _18.SimulationResponseAminoMsg): _18.SimulationResponse;
                    toAminoMsg(message: _18.SimulationResponse): _18.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _18.SimulationResponseProtoMsg): _18.SimulationResponse;
                    toProto(message: _18.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _18.SimulationResponse): _18.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _18.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgData;
                    fromJSON(object: any): _18.MsgData;
                    toJSON(message: _18.MsgData): unknown;
                    fromPartial(object: Partial<_18.MsgData>): _18.MsgData;
                    fromAmino(object: _18.MsgDataAmino): _18.MsgData;
                    toAmino(message: _18.MsgData): _18.MsgDataAmino;
                    fromAminoMsg(object: _18.MsgDataAminoMsg): _18.MsgData;
                    toAminoMsg(message: _18.MsgData): _18.MsgDataAminoMsg;
                    fromProtoMsg(message: _18.MsgDataProtoMsg): _18.MsgData;
                    toProto(message: _18.MsgData): Uint8Array;
                    toProtoMsg(message: _18.MsgData): _18.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _18.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxMsgData;
                    fromJSON(object: any): _18.TxMsgData;
                    toJSON(message: _18.TxMsgData): unknown;
                    fromPartial(object: Partial<_18.TxMsgData>): _18.TxMsgData;
                    fromAmino(object: _18.TxMsgDataAmino): _18.TxMsgData;
                    toAmino(message: _18.TxMsgData): _18.TxMsgDataAmino;
                    fromAminoMsg(object: _18.TxMsgDataAminoMsg): _18.TxMsgData;
                    toAminoMsg(message: _18.TxMsgData): _18.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _18.TxMsgDataProtoMsg): _18.TxMsgData;
                    toProto(message: _18.TxMsgData): Uint8Array;
                    toProtoMsg(message: _18.TxMsgData): _18.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _18.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SearchTxsResult;
                    fromJSON(object: any): _18.SearchTxsResult;
                    toJSON(message: _18.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_18.SearchTxsResult>): _18.SearchTxsResult;
                    fromAmino(object: _18.SearchTxsResultAmino): _18.SearchTxsResult;
                    toAmino(message: _18.SearchTxsResult): _18.SearchTxsResultAmino;
                    fromAminoMsg(object: _18.SearchTxsResultAminoMsg): _18.SearchTxsResult;
                    toAminoMsg(message: _18.SearchTxsResult): _18.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _18.SearchTxsResultProtoMsg): _18.SearchTxsResult;
                    toProto(message: _18.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _18.SearchTxsResult): _18.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _19.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pairs;
                    fromJSON(object: any): _19.Pairs;
                    toJSON(message: _19.Pairs): unknown;
                    fromPartial(object: Partial<_19.Pairs>): _19.Pairs;
                    fromAmino(object: _19.PairsAmino): _19.Pairs;
                    toAmino(message: _19.Pairs): _19.PairsAmino;
                    fromAminoMsg(object: _19.PairsAminoMsg): _19.Pairs;
                    toAminoMsg(message: _19.Pairs): _19.PairsAminoMsg;
                    fromProtoMsg(message: _19.PairsProtoMsg): _19.Pairs;
                    toProto(message: _19.Pairs): Uint8Array;
                    toProtoMsg(message: _19.Pairs): _19.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _19.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Pair;
                    fromJSON(object: any): _19.Pair;
                    toJSON(message: _19.Pair): unknown;
                    fromPartial(object: Partial<_19.Pair>): _19.Pair;
                    fromAmino(object: _19.PairAmino): _19.Pair;
                    toAmino(message: _19.Pair): _19.PairAmino;
                    fromAminoMsg(object: _19.PairAminoMsg): _19.Pair;
                    toAminoMsg(message: _19.Pair): _19.PairAminoMsg;
                    fromProtoMsg(message: _19.PairProtoMsg): _19.Pair;
                    toProto(message: _19.Pair): Uint8Array;
                    toProtoMsg(message: _19.Pair): _19.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _20.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageRequest;
                    fromJSON(object: any): _20.PageRequest;
                    toJSON(message: _20.PageRequest): unknown;
                    fromPartial(object: Partial<_20.PageRequest>): _20.PageRequest;
                    fromAmino(object: _20.PageRequestAmino): _20.PageRequest;
                    toAmino(message: _20.PageRequest): _20.PageRequestAmino;
                    fromAminoMsg(object: _20.PageRequestAminoMsg): _20.PageRequest;
                    toAminoMsg(message: _20.PageRequest): _20.PageRequestAminoMsg;
                    fromProtoMsg(message: _20.PageRequestProtoMsg): _20.PageRequest;
                    toProto(message: _20.PageRequest): Uint8Array;
                    toProtoMsg(message: _20.PageRequest): _20.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _20.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PageResponse;
                    fromJSON(object: any): _20.PageResponse;
                    toJSON(message: _20.PageResponse): unknown;
                    fromPartial(object: Partial<_20.PageResponse>): _20.PageResponse;
                    fromAmino(object: _20.PageResponseAmino): _20.PageResponse;
                    toAmino(message: _20.PageResponse): _20.PageResponseAmino;
                    fromAminoMsg(object: _20.PageResponseAminoMsg): _20.PageResponse;
                    toAminoMsg(message: _20.PageResponse): _20.PageResponseAminoMsg;
                    fromProtoMsg(message: _20.PageResponseProtoMsg): _20.PageResponse;
                    toProto(message: _20.PageResponse): Uint8Array;
                    toProtoMsg(message: _20.PageResponse): _20.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _21.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesRequest;
                    fromJSON(_: any): _21.ListAllInterfacesRequest;
                    toJSON(_: _21.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_21.ListAllInterfacesRequest>): _21.ListAllInterfacesRequest;
                    fromAmino(_: _21.ListAllInterfacesRequestAmino): _21.ListAllInterfacesRequest;
                    toAmino(_: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _21.ListAllInterfacesRequestAminoMsg): _21.ListAllInterfacesRequest;
                    toAminoMsg(message: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _21.ListAllInterfacesRequestProtoMsg): _21.ListAllInterfacesRequest;
                    toProto(message: _21.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _21.ListAllInterfacesRequest): _21.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _21.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListAllInterfacesResponse;
                    fromJSON(object: any): _21.ListAllInterfacesResponse;
                    toJSON(message: _21.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_21.ListAllInterfacesResponse>): _21.ListAllInterfacesResponse;
                    fromAmino(object: _21.ListAllInterfacesResponseAmino): _21.ListAllInterfacesResponse;
                    toAmino(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _21.ListAllInterfacesResponseAminoMsg): _21.ListAllInterfacesResponse;
                    toAminoMsg(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _21.ListAllInterfacesResponseProtoMsg): _21.ListAllInterfacesResponse;
                    toProto(message: _21.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _21.ListAllInterfacesResponse): _21.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _21.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsRequest;
                    fromJSON(object: any): _21.ListImplementationsRequest;
                    toJSON(message: _21.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_21.ListImplementationsRequest>): _21.ListImplementationsRequest;
                    fromAmino(object: _21.ListImplementationsRequestAmino): _21.ListImplementationsRequest;
                    toAmino(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _21.ListImplementationsRequestAminoMsg): _21.ListImplementationsRequest;
                    toAminoMsg(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _21.ListImplementationsRequestProtoMsg): _21.ListImplementationsRequest;
                    toProto(message: _21.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _21.ListImplementationsRequest): _21.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _21.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.ListImplementationsResponse;
                    fromJSON(object: any): _21.ListImplementationsResponse;
                    toJSON(message: _21.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_21.ListImplementationsResponse>): _21.ListImplementationsResponse;
                    fromAmino(object: _21.ListImplementationsResponseAmino): _21.ListImplementationsResponse;
                    toAmino(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _21.ListImplementationsResponseAminoMsg): _21.ListImplementationsResponse;
                    toAminoMsg(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _21.ListImplementationsResponseProtoMsg): _21.ListImplementationsResponse;
                    toProto(message: _21.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _21.ListImplementationsResponse): _21.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _22.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AppDescriptor;
                    fromJSON(object: any): _22.AppDescriptor;
                    toJSON(message: _22.AppDescriptor): unknown;
                    fromPartial(object: Partial<_22.AppDescriptor>): _22.AppDescriptor;
                    fromAmino(object: _22.AppDescriptorAmino): _22.AppDescriptor;
                    toAmino(message: _22.AppDescriptor): _22.AppDescriptorAmino;
                    fromAminoMsg(object: _22.AppDescriptorAminoMsg): _22.AppDescriptor;
                    toAminoMsg(message: _22.AppDescriptor): _22.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _22.AppDescriptorProtoMsg): _22.AppDescriptor;
                    toProto(message: _22.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _22.AppDescriptor): _22.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _22.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxDescriptor;
                    fromJSON(object: any): _22.TxDescriptor;
                    toJSON(message: _22.TxDescriptor): unknown;
                    fromPartial(object: Partial<_22.TxDescriptor>): _22.TxDescriptor;
                    fromAmino(object: _22.TxDescriptorAmino): _22.TxDescriptor;
                    toAmino(message: _22.TxDescriptor): _22.TxDescriptorAmino;
                    fromAminoMsg(object: _22.TxDescriptorAminoMsg): _22.TxDescriptor;
                    toAminoMsg(message: _22.TxDescriptor): _22.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _22.TxDescriptorProtoMsg): _22.TxDescriptor;
                    toProto(message: _22.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _22.TxDescriptor): _22.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _22.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AuthnDescriptor;
                    fromJSON(object: any): _22.AuthnDescriptor;
                    toJSON(message: _22.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_22.AuthnDescriptor>): _22.AuthnDescriptor;
                    fromAmino(object: _22.AuthnDescriptorAmino): _22.AuthnDescriptor;
                    toAmino(message: _22.AuthnDescriptor): _22.AuthnDescriptorAmino;
                    fromAminoMsg(object: _22.AuthnDescriptorAminoMsg): _22.AuthnDescriptor;
                    toAminoMsg(message: _22.AuthnDescriptor): _22.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _22.AuthnDescriptorProtoMsg): _22.AuthnDescriptor;
                    toProto(message: _22.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _22.AuthnDescriptor): _22.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _22.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SigningModeDescriptor;
                    fromJSON(object: any): _22.SigningModeDescriptor;
                    toJSON(message: _22.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_22.SigningModeDescriptor>): _22.SigningModeDescriptor;
                    fromAmino(object: _22.SigningModeDescriptorAmino): _22.SigningModeDescriptor;
                    toAmino(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _22.SigningModeDescriptorAminoMsg): _22.SigningModeDescriptor;
                    toAminoMsg(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _22.SigningModeDescriptorProtoMsg): _22.SigningModeDescriptor;
                    toProto(message: _22.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _22.SigningModeDescriptor): _22.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _22.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ChainDescriptor;
                    fromJSON(object: any): _22.ChainDescriptor;
                    toJSON(message: _22.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_22.ChainDescriptor>): _22.ChainDescriptor;
                    fromAmino(object: _22.ChainDescriptorAmino): _22.ChainDescriptor;
                    toAmino(message: _22.ChainDescriptor): _22.ChainDescriptorAmino;
                    fromAminoMsg(object: _22.ChainDescriptorAminoMsg): _22.ChainDescriptor;
                    toAminoMsg(message: _22.ChainDescriptor): _22.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _22.ChainDescriptorProtoMsg): _22.ChainDescriptor;
                    toProto(message: _22.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _22.ChainDescriptor): _22.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _22.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CodecDescriptor;
                    fromJSON(object: any): _22.CodecDescriptor;
                    toJSON(message: _22.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_22.CodecDescriptor>): _22.CodecDescriptor;
                    fromAmino(object: _22.CodecDescriptorAmino): _22.CodecDescriptor;
                    toAmino(message: _22.CodecDescriptor): _22.CodecDescriptorAmino;
                    fromAminoMsg(object: _22.CodecDescriptorAminoMsg): _22.CodecDescriptor;
                    toAminoMsg(message: _22.CodecDescriptor): _22.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _22.CodecDescriptorProtoMsg): _22.CodecDescriptor;
                    toProto(message: _22.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _22.CodecDescriptor): _22.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceDescriptor;
                    fromJSON(object: any): _22.InterfaceDescriptor;
                    toJSON(message: _22.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceDescriptor>): _22.InterfaceDescriptor;
                    fromAmino(object: _22.InterfaceDescriptorAmino): _22.InterfaceDescriptor;
                    toAmino(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceDescriptorAminoMsg): _22.InterfaceDescriptor;
                    toAminoMsg(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceDescriptorProtoMsg): _22.InterfaceDescriptor;
                    toProto(message: _22.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceDescriptor): _22.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _22.InterfaceImplementerDescriptor;
                    toJSON(message: _22.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceImplementerDescriptor>): _22.InterfaceImplementerDescriptor;
                    fromAmino(object: _22.InterfaceImplementerDescriptorAmino): _22.InterfaceImplementerDescriptor;
                    toAmino(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceImplementerDescriptorAminoMsg): _22.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceImplementerDescriptorProtoMsg): _22.InterfaceImplementerDescriptor;
                    toProto(message: _22.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceImplementerDescriptor): _22.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _22.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _22.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _22.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_22.InterfaceAcceptingMessageDescriptor>): _22.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _22.InterfaceAcceptingMessageDescriptorAmino): _22.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _22.InterfaceAcceptingMessageDescriptorAminoMsg): _22.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _22.InterfaceAcceptingMessageDescriptorProtoMsg): _22.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _22.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _22.InterfaceAcceptingMessageDescriptor): _22.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _22.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ConfigurationDescriptor;
                    fromJSON(object: any): _22.ConfigurationDescriptor;
                    toJSON(message: _22.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_22.ConfigurationDescriptor>): _22.ConfigurationDescriptor;
                    fromAmino(object: _22.ConfigurationDescriptorAmino): _22.ConfigurationDescriptor;
                    toAmino(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _22.ConfigurationDescriptorAminoMsg): _22.ConfigurationDescriptor;
                    toAminoMsg(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _22.ConfigurationDescriptorProtoMsg): _22.ConfigurationDescriptor;
                    toProto(message: _22.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _22.ConfigurationDescriptor): _22.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _22.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDescriptor;
                    fromJSON(object: any): _22.MsgDescriptor;
                    toJSON(message: _22.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_22.MsgDescriptor>): _22.MsgDescriptor;
                    fromAmino(object: _22.MsgDescriptorAmino): _22.MsgDescriptor;
                    toAmino(message: _22.MsgDescriptor): _22.MsgDescriptorAmino;
                    fromAminoMsg(object: _22.MsgDescriptorAminoMsg): _22.MsgDescriptor;
                    toAminoMsg(message: _22.MsgDescriptor): _22.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _22.MsgDescriptorProtoMsg): _22.MsgDescriptor;
                    toProto(message: _22.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _22.MsgDescriptor): _22.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _22.GetAuthnDescriptorRequest;
                    toJSON(_: _22.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetAuthnDescriptorRequest>): _22.GetAuthnDescriptorRequest;
                    fromAmino(_: _22.GetAuthnDescriptorRequestAmino): _22.GetAuthnDescriptorRequest;
                    toAmino(_: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetAuthnDescriptorRequestAminoMsg): _22.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetAuthnDescriptorRequestProtoMsg): _22.GetAuthnDescriptorRequest;
                    toProto(message: _22.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetAuthnDescriptorRequest): _22.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _22.GetAuthnDescriptorResponse;
                    toJSON(message: _22.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetAuthnDescriptorResponse>): _22.GetAuthnDescriptorResponse;
                    fromAmino(object: _22.GetAuthnDescriptorResponseAmino): _22.GetAuthnDescriptorResponse;
                    toAmino(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetAuthnDescriptorResponseAminoMsg): _22.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetAuthnDescriptorResponseProtoMsg): _22.GetAuthnDescriptorResponse;
                    toProto(message: _22.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetAuthnDescriptorResponse): _22.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorRequest;
                    fromJSON(_: any): _22.GetChainDescriptorRequest;
                    toJSON(_: _22.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetChainDescriptorRequest>): _22.GetChainDescriptorRequest;
                    fromAmino(_: _22.GetChainDescriptorRequestAmino): _22.GetChainDescriptorRequest;
                    toAmino(_: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetChainDescriptorRequestAminoMsg): _22.GetChainDescriptorRequest;
                    toAminoMsg(message: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetChainDescriptorRequestProtoMsg): _22.GetChainDescriptorRequest;
                    toProto(message: _22.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetChainDescriptorRequest): _22.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetChainDescriptorResponse;
                    fromJSON(object: any): _22.GetChainDescriptorResponse;
                    toJSON(message: _22.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetChainDescriptorResponse>): _22.GetChainDescriptorResponse;
                    fromAmino(object: _22.GetChainDescriptorResponseAmino): _22.GetChainDescriptorResponse;
                    toAmino(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetChainDescriptorResponseAminoMsg): _22.GetChainDescriptorResponse;
                    toAminoMsg(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetChainDescriptorResponseProtoMsg): _22.GetChainDescriptorResponse;
                    toProto(message: _22.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetChainDescriptorResponse): _22.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorRequest;
                    fromJSON(_: any): _22.GetCodecDescriptorRequest;
                    toJSON(_: _22.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetCodecDescriptorRequest>): _22.GetCodecDescriptorRequest;
                    fromAmino(_: _22.GetCodecDescriptorRequestAmino): _22.GetCodecDescriptorRequest;
                    toAmino(_: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetCodecDescriptorRequestAminoMsg): _22.GetCodecDescriptorRequest;
                    toAminoMsg(message: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetCodecDescriptorRequestProtoMsg): _22.GetCodecDescriptorRequest;
                    toProto(message: _22.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetCodecDescriptorRequest): _22.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetCodecDescriptorResponse;
                    fromJSON(object: any): _22.GetCodecDescriptorResponse;
                    toJSON(message: _22.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetCodecDescriptorResponse>): _22.GetCodecDescriptorResponse;
                    fromAmino(object: _22.GetCodecDescriptorResponseAmino): _22.GetCodecDescriptorResponse;
                    toAmino(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetCodecDescriptorResponseAminoMsg): _22.GetCodecDescriptorResponse;
                    toAminoMsg(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetCodecDescriptorResponseProtoMsg): _22.GetCodecDescriptorResponse;
                    toProto(message: _22.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetCodecDescriptorResponse): _22.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _22.GetConfigurationDescriptorRequest;
                    toJSON(_: _22.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetConfigurationDescriptorRequest>): _22.GetConfigurationDescriptorRequest;
                    fromAmino(_: _22.GetConfigurationDescriptorRequestAmino): _22.GetConfigurationDescriptorRequest;
                    toAmino(_: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetConfigurationDescriptorRequestAminoMsg): _22.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetConfigurationDescriptorRequestProtoMsg): _22.GetConfigurationDescriptorRequest;
                    toProto(message: _22.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetConfigurationDescriptorRequest): _22.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _22.GetConfigurationDescriptorResponse;
                    toJSON(message: _22.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetConfigurationDescriptorResponse>): _22.GetConfigurationDescriptorResponse;
                    fromAmino(object: _22.GetConfigurationDescriptorResponseAmino): _22.GetConfigurationDescriptorResponse;
                    toAmino(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetConfigurationDescriptorResponseAminoMsg): _22.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetConfigurationDescriptorResponseProtoMsg): _22.GetConfigurationDescriptorResponse;
                    toProto(message: _22.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetConfigurationDescriptorResponse): _22.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _22.GetQueryServicesDescriptorRequest;
                    toJSON(_: _22.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetQueryServicesDescriptorRequest>): _22.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _22.GetQueryServicesDescriptorRequestAmino): _22.GetQueryServicesDescriptorRequest;
                    toAmino(_: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetQueryServicesDescriptorRequestAminoMsg): _22.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetQueryServicesDescriptorRequestProtoMsg): _22.GetQueryServicesDescriptorRequest;
                    toProto(message: _22.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetQueryServicesDescriptorRequest): _22.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _22.GetQueryServicesDescriptorResponse;
                    toJSON(message: _22.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetQueryServicesDescriptorResponse>): _22.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _22.GetQueryServicesDescriptorResponseAmino): _22.GetQueryServicesDescriptorResponse;
                    toAmino(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetQueryServicesDescriptorResponseAminoMsg): _22.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetQueryServicesDescriptorResponseProtoMsg): _22.GetQueryServicesDescriptorResponse;
                    toProto(message: _22.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetQueryServicesDescriptorResponse): _22.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _22.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorRequest;
                    fromJSON(_: any): _22.GetTxDescriptorRequest;
                    toJSON(_: _22.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_22.GetTxDescriptorRequest>): _22.GetTxDescriptorRequest;
                    fromAmino(_: _22.GetTxDescriptorRequestAmino): _22.GetTxDescriptorRequest;
                    toAmino(_: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _22.GetTxDescriptorRequestAminoMsg): _22.GetTxDescriptorRequest;
                    toAminoMsg(message: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _22.GetTxDescriptorRequestProtoMsg): _22.GetTxDescriptorRequest;
                    toProto(message: _22.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _22.GetTxDescriptorRequest): _22.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _22.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetTxDescriptorResponse;
                    fromJSON(object: any): _22.GetTxDescriptorResponse;
                    toJSON(message: _22.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_22.GetTxDescriptorResponse>): _22.GetTxDescriptorResponse;
                    fromAmino(object: _22.GetTxDescriptorResponseAmino): _22.GetTxDescriptorResponse;
                    toAmino(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _22.GetTxDescriptorResponseAminoMsg): _22.GetTxDescriptorResponse;
                    toAminoMsg(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _22.GetTxDescriptorResponseProtoMsg): _22.GetTxDescriptorResponse;
                    toProto(message: _22.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _22.GetTxDescriptorResponse): _22.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServicesDescriptor;
                    fromJSON(object: any): _22.QueryServicesDescriptor;
                    toJSON(message: _22.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryServicesDescriptor>): _22.QueryServicesDescriptor;
                    fromAmino(object: _22.QueryServicesDescriptorAmino): _22.QueryServicesDescriptor;
                    toAmino(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _22.QueryServicesDescriptorAminoMsg): _22.QueryServicesDescriptor;
                    toAminoMsg(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryServicesDescriptorProtoMsg): _22.QueryServicesDescriptor;
                    toProto(message: _22.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryServicesDescriptor): _22.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryServiceDescriptor;
                    fromJSON(object: any): _22.QueryServiceDescriptor;
                    toJSON(message: _22.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryServiceDescriptor>): _22.QueryServiceDescriptor;
                    fromAmino(object: _22.QueryServiceDescriptorAmino): _22.QueryServiceDescriptor;
                    toAmino(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _22.QueryServiceDescriptorAminoMsg): _22.QueryServiceDescriptor;
                    toAminoMsg(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryServiceDescriptorProtoMsg): _22.QueryServiceDescriptor;
                    toProto(message: _22.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryServiceDescriptor): _22.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _22.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryMethodDescriptor;
                    fromJSON(object: any): _22.QueryMethodDescriptor;
                    toJSON(message: _22.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_22.QueryMethodDescriptor>): _22.QueryMethodDescriptor;
                    fromAmino(object: _22.QueryMethodDescriptorAmino): _22.QueryMethodDescriptor;
                    toAmino(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _22.QueryMethodDescriptorAminoMsg): _22.QueryMethodDescriptor;
                    toAminoMsg(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _22.QueryMethodDescriptorProtoMsg): _22.QueryMethodDescriptor;
                    toProto(message: _22.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _22.QueryMethodDescriptor): _22.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _23.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Snapshot;
                    fromJSON(object: any): _23.Snapshot;
                    toJSON(message: _23.Snapshot): unknown;
                    fromPartial(object: Partial<_23.Snapshot>): _23.Snapshot;
                    fromAmino(object: _23.SnapshotAmino): _23.Snapshot;
                    toAmino(message: _23.Snapshot): _23.SnapshotAmino;
                    fromAminoMsg(object: _23.SnapshotAminoMsg): _23.Snapshot;
                    toAminoMsg(message: _23.Snapshot): _23.SnapshotAminoMsg;
                    fromProtoMsg(message: _23.SnapshotProtoMsg): _23.Snapshot;
                    toProto(message: _23.Snapshot): Uint8Array;
                    toProtoMsg(message: _23.Snapshot): _23.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                    fromJSON(object: any): _23.Metadata;
                    toJSON(message: _23.Metadata): unknown;
                    fromPartial(object: Partial<_23.Metadata>): _23.Metadata;
                    fromAmino(object: _23.MetadataAmino): _23.Metadata;
                    toAmino(message: _23.Metadata): _23.MetadataAmino;
                    fromAminoMsg(object: _23.MetadataAminoMsg): _23.Metadata;
                    toAminoMsg(message: _23.Metadata): _23.MetadataAminoMsg;
                    fromProtoMsg(message: _23.MetadataProtoMsg): _23.Metadata;
                    toProto(message: _23.Metadata): Uint8Array;
                    toProtoMsg(message: _23.Metadata): _23.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromJSON(object: any): _23.SnapshotItem;
                    toJSON(message: _23.SnapshotItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                    fromAmino(object: _23.SnapshotItemAmino): _23.SnapshotItem;
                    toAmino(message: _23.SnapshotItem): _23.SnapshotItemAmino;
                    fromAminoMsg(object: _23.SnapshotItemAminoMsg): _23.SnapshotItem;
                    toAminoMsg(message: _23.SnapshotItem): _23.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotItemProtoMsg): _23.SnapshotItem;
                    toProto(message: _23.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotItem): _23.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    toJSON(message: _23.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                    fromAmino(object: _23.SnapshotStoreItemAmino): _23.SnapshotStoreItem;
                    toAmino(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _23.SnapshotStoreItemAminoMsg): _23.SnapshotStoreItem;
                    toAminoMsg(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotStoreItemProtoMsg): _23.SnapshotStoreItem;
                    toProto(message: _23.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotStoreItem): _23.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    toJSON(message: _23.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                    fromAmino(object: _23.SnapshotIAVLItemAmino): _23.SnapshotIAVLItem;
                    toAmino(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _23.SnapshotIAVLItemAminoMsg): _23.SnapshotIAVLItem;
                    toAminoMsg(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotIAVLItemProtoMsg): _23.SnapshotIAVLItem;
                    toProto(message: _23.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotIAVLItem): _23.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _23.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionMeta;
                    fromJSON(object: any): _23.SnapshotExtensionMeta;
                    toJSON(message: _23.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_23.SnapshotExtensionMeta>): _23.SnapshotExtensionMeta;
                    fromAmino(object: _23.SnapshotExtensionMetaAmino): _23.SnapshotExtensionMeta;
                    toAmino(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _23.SnapshotExtensionMetaAminoMsg): _23.SnapshotExtensionMeta;
                    toAminoMsg(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _23.SnapshotExtensionMetaProtoMsg): _23.SnapshotExtensionMeta;
                    toProto(message: _23.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _23.SnapshotExtensionMeta): _23.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _23.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotExtensionPayload;
                    fromJSON(object: any): _23.SnapshotExtensionPayload;
                    toJSON(message: _23.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_23.SnapshotExtensionPayload>): _23.SnapshotExtensionPayload;
                    fromAmino(object: _23.SnapshotExtensionPayloadAmino): _23.SnapshotExtensionPayload;
                    toAmino(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _23.SnapshotExtensionPayloadAminoMsg): _23.SnapshotExtensionPayload;
                    toAminoMsg(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _23.SnapshotExtensionPayloadProtoMsg): _23.SnapshotExtensionPayload;
                    toProto(message: _23.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _23.SnapshotExtensionPayload): _23.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _23.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotKVItem;
                    fromJSON(object: any): _23.SnapshotKVItem;
                    toJSON(message: _23.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotKVItem>): _23.SnapshotKVItem;
                    fromAmino(object: _23.SnapshotKVItemAmino): _23.SnapshotKVItem;
                    toAmino(message: _23.SnapshotKVItem): _23.SnapshotKVItemAmino;
                    fromAminoMsg(object: _23.SnapshotKVItemAminoMsg): _23.SnapshotKVItem;
                    toAminoMsg(message: _23.SnapshotKVItem): _23.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _23.SnapshotKVItemProtoMsg): _23.SnapshotKVItem;
                    toProto(message: _23.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _23.SnapshotKVItem): _23.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _23.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotSchema;
                    fromJSON(object: any): _23.SnapshotSchema;
                    toJSON(message: _23.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_23.SnapshotSchema>): _23.SnapshotSchema;
                    fromAmino(object: _23.SnapshotSchemaAmino): _23.SnapshotSchema;
                    toAmino(message: _23.SnapshotSchema): _23.SnapshotSchemaAmino;
                    fromAminoMsg(object: _23.SnapshotSchemaAminoMsg): _23.SnapshotSchema;
                    toAminoMsg(message: _23.SnapshotSchema): _23.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _23.SnapshotSchemaProtoMsg): _23.SnapshotSchema;
                    toProto(message: _23.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _23.SnapshotSchema): _23.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _25.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StoreKVPair;
                    fromJSON(object: any): _25.StoreKVPair;
                    toJSON(message: _25.StoreKVPair): unknown;
                    fromPartial(object: Partial<_25.StoreKVPair>): _25.StoreKVPair;
                    fromAmino(object: _25.StoreKVPairAmino): _25.StoreKVPair;
                    toAmino(message: _25.StoreKVPair): _25.StoreKVPairAmino;
                    fromAminoMsg(object: _25.StoreKVPairAminoMsg): _25.StoreKVPair;
                    toAminoMsg(message: _25.StoreKVPair): _25.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _25.StoreKVPairProtoMsg): _25.StoreKVPair;
                    toProto(message: _25.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _25.StoreKVPair): _25.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _24.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitInfo;
                    fromJSON(object: any): _24.CommitInfo;
                    toJSON(message: _24.CommitInfo): unknown;
                    fromPartial(object: Partial<_24.CommitInfo>): _24.CommitInfo;
                    fromAmino(object: _24.CommitInfoAmino): _24.CommitInfo;
                    toAmino(message: _24.CommitInfo): _24.CommitInfoAmino;
                    fromAminoMsg(object: _24.CommitInfoAminoMsg): _24.CommitInfo;
                    toAminoMsg(message: _24.CommitInfo): _24.CommitInfoAminoMsg;
                    fromProtoMsg(message: _24.CommitInfoProtoMsg): _24.CommitInfo;
                    toProto(message: _24.CommitInfo): Uint8Array;
                    toProtoMsg(message: _24.CommitInfo): _24.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _24.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StoreInfo;
                    fromJSON(object: any): _24.StoreInfo;
                    toJSON(message: _24.StoreInfo): unknown;
                    fromPartial(object: Partial<_24.StoreInfo>): _24.StoreInfo;
                    fromAmino(object: _24.StoreInfoAmino): _24.StoreInfo;
                    toAmino(message: _24.StoreInfo): _24.StoreInfoAmino;
                    fromAminoMsg(object: _24.StoreInfoAminoMsg): _24.StoreInfo;
                    toAminoMsg(message: _24.StoreInfo): _24.StoreInfoAminoMsg;
                    fromProtoMsg(message: _24.StoreInfoProtoMsg): _24.StoreInfo;
                    toProto(message: _24.StoreInfo): Uint8Array;
                    toProtoMsg(message: _24.StoreInfo): _24.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _24.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CommitID;
                    fromJSON(object: any): _24.CommitID;
                    toJSON(message: _24.CommitID): unknown;
                    fromPartial(object: Partial<_24.CommitID>): _24.CommitID;
                    fromAmino(object: _24.CommitIDAmino): _24.CommitID;
                    toAmino(message: _24.CommitID): _24.CommitIDAmino;
                    fromAminoMsg(object: _24.CommitIDAminoMsg): _24.CommitID;
                    toAminoMsg(message: _24.CommitID): _24.CommitIDAminoMsg;
                    fromProtoMsg(message: _24.CommitIDProtoMsg): _24.CommitID;
                    toProto(message: _24.CommitID): Uint8Array;
                    toProtoMsg(message: _24.CommitID): _24.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _266.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                    getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                    getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                    getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _248.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _26.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _26.GetValidatorSetByHeightRequest;
                    toJSON(message: _26.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightRequest>): _26.GetValidatorSetByHeightRequest;
                    fromAmino(object: _26.GetValidatorSetByHeightRequestAmino): _26.GetValidatorSetByHeightRequest;
                    toAmino(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _26.GetValidatorSetByHeightRequestAminoMsg): _26.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _26.GetValidatorSetByHeightRequestProtoMsg): _26.GetValidatorSetByHeightRequest;
                    toProto(message: _26.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _26.GetValidatorSetByHeightRequest): _26.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _26.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _26.GetValidatorSetByHeightResponse;
                    toJSON(message: _26.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_26.GetValidatorSetByHeightResponse>): _26.GetValidatorSetByHeightResponse;
                    fromAmino(object: _26.GetValidatorSetByHeightResponseAmino): _26.GetValidatorSetByHeightResponse;
                    toAmino(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _26.GetValidatorSetByHeightResponseAminoMsg): _26.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _26.GetValidatorSetByHeightResponseProtoMsg): _26.GetValidatorSetByHeightResponse;
                    toProto(message: _26.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _26.GetValidatorSetByHeightResponse): _26.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _26.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _26.GetLatestValidatorSetRequest;
                    toJSON(message: _26.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetRequest>): _26.GetLatestValidatorSetRequest;
                    fromAmino(object: _26.GetLatestValidatorSetRequestAmino): _26.GetLatestValidatorSetRequest;
                    toAmino(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _26.GetLatestValidatorSetRequestAminoMsg): _26.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _26.GetLatestValidatorSetRequestProtoMsg): _26.GetLatestValidatorSetRequest;
                    toProto(message: _26.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _26.GetLatestValidatorSetRequest): _26.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _26.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _26.GetLatestValidatorSetResponse;
                    toJSON(message: _26.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_26.GetLatestValidatorSetResponse>): _26.GetLatestValidatorSetResponse;
                    fromAmino(object: _26.GetLatestValidatorSetResponseAmino): _26.GetLatestValidatorSetResponse;
                    toAmino(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _26.GetLatestValidatorSetResponseAminoMsg): _26.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _26.GetLatestValidatorSetResponseProtoMsg): _26.GetLatestValidatorSetResponse;
                    toProto(message: _26.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _26.GetLatestValidatorSetResponse): _26.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _26.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Validator;
                    fromJSON(object: any): _26.Validator;
                    toJSON(message: _26.Validator): unknown;
                    fromPartial(object: Partial<_26.Validator>): _26.Validator;
                    fromAmino(object: _26.ValidatorAmino): _26.Validator;
                    toAmino(message: _26.Validator): _26.ValidatorAmino;
                    fromAminoMsg(object: _26.ValidatorAminoMsg): _26.Validator;
                    toAminoMsg(message: _26.Validator): _26.ValidatorAminoMsg;
                    fromProtoMsg(message: _26.ValidatorProtoMsg): _26.Validator;
                    toProto(message: _26.Validator): Uint8Array;
                    toProtoMsg(message: _26.Validator): _26.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _26.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightRequest;
                    fromJSON(object: any): _26.GetBlockByHeightRequest;
                    toJSON(message: _26.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_26.GetBlockByHeightRequest>): _26.GetBlockByHeightRequest;
                    fromAmino(object: _26.GetBlockByHeightRequestAmino): _26.GetBlockByHeightRequest;
                    toAmino(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _26.GetBlockByHeightRequestAminoMsg): _26.GetBlockByHeightRequest;
                    toAminoMsg(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _26.GetBlockByHeightRequestProtoMsg): _26.GetBlockByHeightRequest;
                    toProto(message: _26.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _26.GetBlockByHeightRequest): _26.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _26.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetBlockByHeightResponse;
                    fromJSON(object: any): _26.GetBlockByHeightResponse;
                    toJSON(message: _26.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_26.GetBlockByHeightResponse>): _26.GetBlockByHeightResponse;
                    fromAmino(object: _26.GetBlockByHeightResponseAmino): _26.GetBlockByHeightResponse;
                    toAmino(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _26.GetBlockByHeightResponseAminoMsg): _26.GetBlockByHeightResponse;
                    toAminoMsg(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _26.GetBlockByHeightResponseProtoMsg): _26.GetBlockByHeightResponse;
                    toProto(message: _26.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _26.GetBlockByHeightResponse): _26.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _26.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockRequest;
                    fromJSON(_: any): _26.GetLatestBlockRequest;
                    toJSON(_: _26.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_26.GetLatestBlockRequest>): _26.GetLatestBlockRequest;
                    fromAmino(_: _26.GetLatestBlockRequestAmino): _26.GetLatestBlockRequest;
                    toAmino(_: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _26.GetLatestBlockRequestAminoMsg): _26.GetLatestBlockRequest;
                    toAminoMsg(message: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _26.GetLatestBlockRequestProtoMsg): _26.GetLatestBlockRequest;
                    toProto(message: _26.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _26.GetLatestBlockRequest): _26.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _26.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetLatestBlockResponse;
                    fromJSON(object: any): _26.GetLatestBlockResponse;
                    toJSON(message: _26.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_26.GetLatestBlockResponse>): _26.GetLatestBlockResponse;
                    fromAmino(object: _26.GetLatestBlockResponseAmino): _26.GetLatestBlockResponse;
                    toAmino(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _26.GetLatestBlockResponseAminoMsg): _26.GetLatestBlockResponse;
                    toAminoMsg(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _26.GetLatestBlockResponseProtoMsg): _26.GetLatestBlockResponse;
                    toProto(message: _26.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _26.GetLatestBlockResponse): _26.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _26.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingRequest;
                    fromJSON(_: any): _26.GetSyncingRequest;
                    toJSON(_: _26.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_26.GetSyncingRequest>): _26.GetSyncingRequest;
                    fromAmino(_: _26.GetSyncingRequestAmino): _26.GetSyncingRequest;
                    toAmino(_: _26.GetSyncingRequest): _26.GetSyncingRequestAmino;
                    fromAminoMsg(object: _26.GetSyncingRequestAminoMsg): _26.GetSyncingRequest;
                    toAminoMsg(message: _26.GetSyncingRequest): _26.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _26.GetSyncingRequestProtoMsg): _26.GetSyncingRequest;
                    toProto(message: _26.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _26.GetSyncingRequest): _26.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _26.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetSyncingResponse;
                    fromJSON(object: any): _26.GetSyncingResponse;
                    toJSON(message: _26.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_26.GetSyncingResponse>): _26.GetSyncingResponse;
                    fromAmino(object: _26.GetSyncingResponseAmino): _26.GetSyncingResponse;
                    toAmino(message: _26.GetSyncingResponse): _26.GetSyncingResponseAmino;
                    fromAminoMsg(object: _26.GetSyncingResponseAminoMsg): _26.GetSyncingResponse;
                    toAminoMsg(message: _26.GetSyncingResponse): _26.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _26.GetSyncingResponseProtoMsg): _26.GetSyncingResponse;
                    toProto(message: _26.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _26.GetSyncingResponse): _26.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _26.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoRequest;
                    fromJSON(_: any): _26.GetNodeInfoRequest;
                    toJSON(_: _26.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_26.GetNodeInfoRequest>): _26.GetNodeInfoRequest;
                    fromAmino(_: _26.GetNodeInfoRequestAmino): _26.GetNodeInfoRequest;
                    toAmino(_: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _26.GetNodeInfoRequestAminoMsg): _26.GetNodeInfoRequest;
                    toAminoMsg(message: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _26.GetNodeInfoRequestProtoMsg): _26.GetNodeInfoRequest;
                    toProto(message: _26.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _26.GetNodeInfoRequest): _26.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _26.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GetNodeInfoResponse;
                    fromJSON(object: any): _26.GetNodeInfoResponse;
                    toJSON(message: _26.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_26.GetNodeInfoResponse>): _26.GetNodeInfoResponse;
                    fromAmino(object: _26.GetNodeInfoResponseAmino): _26.GetNodeInfoResponse;
                    toAmino(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _26.GetNodeInfoResponseAminoMsg): _26.GetNodeInfoResponse;
                    toAminoMsg(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _26.GetNodeInfoResponseProtoMsg): _26.GetNodeInfoResponse;
                    toProto(message: _26.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _26.GetNodeInfoResponse): _26.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _26.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.VersionInfo;
                    fromJSON(object: any): _26.VersionInfo;
                    toJSON(message: _26.VersionInfo): unknown;
                    fromPartial(object: Partial<_26.VersionInfo>): _26.VersionInfo;
                    fromAmino(object: _26.VersionInfoAmino): _26.VersionInfo;
                    toAmino(message: _26.VersionInfo): _26.VersionInfoAmino;
                    fromAminoMsg(object: _26.VersionInfoAminoMsg): _26.VersionInfo;
                    toAminoMsg(message: _26.VersionInfo): _26.VersionInfoAminoMsg;
                    fromProtoMsg(message: _26.VersionInfoProtoMsg): _26.VersionInfo;
                    toProto(message: _26.VersionInfo): Uint8Array;
                    toProtoMsg(message: _26.VersionInfo): _26.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _26.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Module;
                    fromJSON(object: any): _26.Module;
                    toJSON(message: _26.Module): unknown;
                    fromPartial(object: Partial<_26.Module>): _26.Module;
                    fromAmino(object: _26.ModuleAmino): _26.Module;
                    toAmino(message: _26.Module): _26.ModuleAmino;
                    fromAminoMsg(object: _26.ModuleAminoMsg): _26.Module;
                    toAminoMsg(message: _26.Module): _26.ModuleAminoMsg;
                    fromProtoMsg(message: _26.ModuleProtoMsg): _26.Module;
                    toProto(message: _26.Module): Uint8Array;
                    toProtoMsg(message: _26.Module): _26.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _27.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Coin;
                fromJSON(object: any): _27.Coin;
                toJSON(message: _27.Coin): unknown;
                fromPartial(object: Partial<_27.Coin>): _27.Coin;
                fromAmino(object: _27.CoinAmino): _27.Coin;
                toAmino(message: _27.Coin): _27.CoinAmino;
                fromAminoMsg(object: _27.CoinAminoMsg): _27.Coin;
                toAminoMsg(message: _27.Coin): _27.CoinAminoMsg;
                fromProtoMsg(message: _27.CoinProtoMsg): _27.Coin;
                toProto(message: _27.Coin): Uint8Array;
                toProtoMsg(message: _27.Coin): _27.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _27.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecCoin;
                fromJSON(object: any): _27.DecCoin;
                toJSON(message: _27.DecCoin): unknown;
                fromPartial(object: Partial<_27.DecCoin>): _27.DecCoin;
                fromAmino(object: _27.DecCoinAmino): _27.DecCoin;
                toAmino(message: _27.DecCoin): _27.DecCoinAmino;
                fromAminoMsg(object: _27.DecCoinAminoMsg): _27.DecCoin;
                toAminoMsg(message: _27.DecCoin): _27.DecCoinAminoMsg;
                fromProtoMsg(message: _27.DecCoinProtoMsg): _27.DecCoin;
                toProto(message: _27.DecCoin): Uint8Array;
                toProtoMsg(message: _27.DecCoin): _27.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _27.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IntProto;
                fromJSON(object: any): _27.IntProto;
                toJSON(message: _27.IntProto): unknown;
                fromPartial(object: Partial<_27.IntProto>): _27.IntProto;
                fromAmino(object: _27.IntProtoAmino): _27.IntProto;
                toAmino(message: _27.IntProto): _27.IntProtoAmino;
                fromAminoMsg(object: _27.IntProtoAminoMsg): _27.IntProto;
                toAminoMsg(message: _27.IntProto): _27.IntProtoAminoMsg;
                fromProtoMsg(message: _27.IntProtoProtoMsg): _27.IntProto;
                toProto(message: _27.IntProto): Uint8Array;
                toProtoMsg(message: _27.IntProto): _27.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _27.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DecProto;
                fromJSON(object: any): _27.DecProto;
                toJSON(message: _27.DecProto): unknown;
                fromPartial(object: Partial<_27.DecProto>): _27.DecProto;
                fromAmino(object: _27.DecProtoAmino): _27.DecProto;
                toAmino(message: _27.DecProto): _27.DecProtoAmino;
                fromAminoMsg(object: _27.DecProtoAminoMsg): _27.DecProto;
                toAminoMsg(message: _27.DecProto): _27.DecProtoAminoMsg;
                fromProtoMsg(message: _27.DecProtoProtoMsg): _27.DecProto;
                toProto(message: _27.DecProto): Uint8Array;
                toProtoMsg(message: _27.DecProto): _27.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _29.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisOwners;
                fromJSON(object: any): _29.GenesisOwners;
                toJSON(message: _29.GenesisOwners): unknown;
                fromPartial(object: Partial<_29.GenesisOwners>): _29.GenesisOwners;
                fromAmino(object: _29.GenesisOwnersAmino): _29.GenesisOwners;
                toAmino(message: _29.GenesisOwners): _29.GenesisOwnersAmino;
                fromAminoMsg(object: _29.GenesisOwnersAminoMsg): _29.GenesisOwners;
                toAminoMsg(message: _29.GenesisOwners): _29.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _29.GenesisOwnersProtoMsg): _29.GenesisOwners;
                toProto(message: _29.GenesisOwners): Uint8Array;
                toProtoMsg(message: _29.GenesisOwners): _29.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _28.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Capability;
                fromJSON(object: any): _28.Capability;
                toJSON(message: _28.Capability): unknown;
                fromPartial(object: Partial<_28.Capability>): _28.Capability;
                fromAmino(object: _28.CapabilityAmino): _28.Capability;
                toAmino(message: _28.Capability): _28.CapabilityAmino;
                fromAminoMsg(object: _28.CapabilityAminoMsg): _28.Capability;
                toAminoMsg(message: _28.Capability): _28.CapabilityAminoMsg;
                fromProtoMsg(message: _28.CapabilityProtoMsg): _28.Capability;
                toProto(message: _28.Capability): Uint8Array;
                toProtoMsg(message: _28.Capability): _28.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _28.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Owner;
                fromJSON(object: any): _28.Owner;
                toJSON(message: _28.Owner): unknown;
                fromPartial(object: Partial<_28.Owner>): _28.Owner;
                fromAmino(object: _28.OwnerAmino): _28.Owner;
                toAmino(message: _28.Owner): _28.OwnerAmino;
                fromAminoMsg(object: _28.OwnerAminoMsg): _28.Owner;
                toAminoMsg(message: _28.Owner): _28.OwnerAminoMsg;
                fromProtoMsg(message: _28.OwnerProtoMsg): _28.Owner;
                toProto(message: _28.Owner): Uint8Array;
                toProtoMsg(message: _28.Owner): _28.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _28.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CapabilityOwners;
                fromJSON(object: any): _28.CapabilityOwners;
                toJSON(message: _28.CapabilityOwners): unknown;
                fromPartial(object: Partial<_28.CapabilityOwners>): _28.CapabilityOwners;
                fromAmino(object: _28.CapabilityOwnersAmino): _28.CapabilityOwners;
                toAmino(message: _28.CapabilityOwners): _28.CapabilityOwnersAmino;
                fromAminoMsg(object: _28.CapabilityOwnersAminoMsg): _28.CapabilityOwners;
                toAminoMsg(message: _28.CapabilityOwners): _28.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _28.CapabilityOwnersProtoMsg): _28.CapabilityOwners;
                toProto(message: _28.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _28.CapabilityOwners): _28.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _31.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _31.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _31.MsgVerifyInvariant) => _31.MsgVerifyInvariantAmino;
                    fromAmino: (object: _31.MsgVerifyInvariantAmino) => _31.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _31.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariant;
                fromJSON(object: any): _31.MsgVerifyInvariant;
                toJSON(message: _31.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_31.MsgVerifyInvariant>): _31.MsgVerifyInvariant;
                fromAmino(object: _31.MsgVerifyInvariantAmino): _31.MsgVerifyInvariant;
                toAmino(message: _31.MsgVerifyInvariant): _31.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _31.MsgVerifyInvariantAminoMsg): _31.MsgVerifyInvariant;
                toAminoMsg(message: _31.MsgVerifyInvariant): _31.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _31.MsgVerifyInvariantProtoMsg): _31.MsgVerifyInvariant;
                toProto(message: _31.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _31.MsgVerifyInvariant): _31.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _31.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.MsgVerifyInvariantResponse;
                fromJSON(_: any): _31.MsgVerifyInvariantResponse;
                toJSON(_: _31.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_31.MsgVerifyInvariantResponse>): _31.MsgVerifyInvariantResponse;
                fromAmino(_: _31.MsgVerifyInvariantResponseAmino): _31.MsgVerifyInvariantResponse;
                toAmino(_: _31.MsgVerifyInvariantResponse): _31.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _31.MsgVerifyInvariantResponseAminoMsg): _31.MsgVerifyInvariantResponse;
                toAminoMsg(message: _31.MsgVerifyInvariantResponse): _31.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _31.MsgVerifyInvariantResponseProtoMsg): _31.MsgVerifyInvariantResponse;
                toProto(message: _31.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _31.MsgVerifyInvariantResponse): _31.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): unknown;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
                fromAmino(object: _32.PubKeyAmino): _32.PubKey;
                toAmino(message: _32.PubKey): _32.PubKeyAmino;
                fromAminoMsg(object: _32.PubKeyAminoMsg): _32.PubKey;
                toAminoMsg(message: _32.PubKey): _32.PubKeyAminoMsg;
                fromProtoMsg(message: _32.PubKeyProtoMsg): _32.PubKey;
                toProto(message: _32.PubKey): Uint8Array;
                toProtoMsg(message: _32.PubKey): _32.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
                fromAmino(object: _32.PrivKeyAmino): _32.PrivKey;
                toAmino(message: _32.PrivKey): _32.PrivKeyAmino;
                fromAminoMsg(object: _32.PrivKeyAminoMsg): _32.PrivKey;
                toAminoMsg(message: _32.PrivKey): _32.PrivKeyAminoMsg;
                fromProtoMsg(message: _32.PrivKeyProtoMsg): _32.PrivKey;
                toProto(message: _32.PrivKey): Uint8Array;
                toProtoMsg(message: _32.PrivKey): _32.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _33.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.BIP44Params;
                    fromJSON(object: any): _33.BIP44Params;
                    toJSON(message: _33.BIP44Params): unknown;
                    fromPartial(object: Partial<_33.BIP44Params>): _33.BIP44Params;
                    fromAmino(object: _33.BIP44ParamsAmino): _33.BIP44Params;
                    toAmino(message: _33.BIP44Params): _33.BIP44ParamsAmino;
                    fromAminoMsg(object: _33.BIP44ParamsAminoMsg): _33.BIP44Params;
                    toAminoMsg(message: _33.BIP44Params): _33.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _33.BIP44ParamsProtoMsg): _33.BIP44Params;
                    toProto(message: _33.BIP44Params): Uint8Array;
                    toProtoMsg(message: _33.BIP44Params): _33.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _34.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record;
                    fromJSON(object: any): _34.Record;
                    toJSON(message: _34.Record): unknown;
                    fromPartial(object: Partial<_34.Record>): _34.Record;
                    fromAmino(object: _34.RecordAmino): _34.Record;
                    toAmino(message: _34.Record): _34.RecordAmino;
                    fromAminoMsg(object: _34.RecordAminoMsg): _34.Record;
                    toAminoMsg(message: _34.Record): _34.RecordAminoMsg;
                    fromProtoMsg(message: _34.RecordProtoMsg): _34.Record;
                    toProto(message: _34.Record): Uint8Array;
                    toProtoMsg(message: _34.Record): _34.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _34.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Local;
                    fromJSON(object: any): _34.Record_Local;
                    toJSON(message: _34.Record_Local): unknown;
                    fromPartial(object: Partial<_34.Record_Local>): _34.Record_Local;
                    fromAmino(object: _34.Record_LocalAmino): _34.Record_Local;
                    toAmino(message: _34.Record_Local): _34.Record_LocalAmino;
                    fromAminoMsg(object: _34.Record_LocalAminoMsg): _34.Record_Local;
                    toAminoMsg(message: _34.Record_Local): _34.Record_LocalAminoMsg;
                    fromProtoMsg(message: _34.Record_LocalProtoMsg): _34.Record_Local;
                    toProto(message: _34.Record_Local): Uint8Array;
                    toProtoMsg(message: _34.Record_Local): _34.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _34.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Ledger;
                    fromJSON(object: any): _34.Record_Ledger;
                    toJSON(message: _34.Record_Ledger): unknown;
                    fromPartial(object: Partial<_34.Record_Ledger>): _34.Record_Ledger;
                    fromAmino(object: _34.Record_LedgerAmino): _34.Record_Ledger;
                    toAmino(message: _34.Record_Ledger): _34.Record_LedgerAmino;
                    fromAminoMsg(object: _34.Record_LedgerAminoMsg): _34.Record_Ledger;
                    toAminoMsg(message: _34.Record_Ledger): _34.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _34.Record_LedgerProtoMsg): _34.Record_Ledger;
                    toProto(message: _34.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _34.Record_Ledger): _34.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _34.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Multi;
                    fromJSON(_: any): _34.Record_Multi;
                    toJSON(_: _34.Record_Multi): unknown;
                    fromPartial(_: Partial<_34.Record_Multi>): _34.Record_Multi;
                    fromAmino(_: _34.Record_MultiAmino): _34.Record_Multi;
                    toAmino(_: _34.Record_Multi): _34.Record_MultiAmino;
                    fromAminoMsg(object: _34.Record_MultiAminoMsg): _34.Record_Multi;
                    toAminoMsg(message: _34.Record_Multi): _34.Record_MultiAminoMsg;
                    fromProtoMsg(message: _34.Record_MultiProtoMsg): _34.Record_Multi;
                    toProto(message: _34.Record_Multi): Uint8Array;
                    toProtoMsg(message: _34.Record_Multi): _34.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _34.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Record_Offline;
                    fromJSON(_: any): _34.Record_Offline;
                    toJSON(_: _34.Record_Offline): unknown;
                    fromPartial(_: Partial<_34.Record_Offline>): _34.Record_Offline;
                    fromAmino(_: _34.Record_OfflineAmino): _34.Record_Offline;
                    toAmino(_: _34.Record_Offline): _34.Record_OfflineAmino;
                    fromAminoMsg(object: _34.Record_OfflineAminoMsg): _34.Record_Offline;
                    toAminoMsg(message: _34.Record_Offline): _34.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _34.Record_OfflineProtoMsg): _34.Record_Offline;
                    toProto(message: _34.Record_Offline): Uint8Array;
                    toProtoMsg(message: _34.Record_Offline): _34.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _35.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LegacyAminoPubKey;
                fromJSON(object: any): _35.LegacyAminoPubKey;
                toJSON(message: _35.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_35.LegacyAminoPubKey>): _35.LegacyAminoPubKey;
                fromAmino(object: _35.LegacyAminoPubKeyAmino): _35.LegacyAminoPubKey;
                toAmino(message: _35.LegacyAminoPubKey): _35.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _35.LegacyAminoPubKeyAminoMsg): _35.LegacyAminoPubKey;
                toAminoMsg(message: _35.LegacyAminoPubKey): _35.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _35.LegacyAminoPubKeyProtoMsg): _35.LegacyAminoPubKey;
                toProto(message: _35.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _35.LegacyAminoPubKey): _35.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: Partial<_36.PubKey>): _36.PubKey;
                fromAmino(object: _36.PubKeyAmino): _36.PubKey;
                toAmino(message: _36.PubKey): _36.PubKeyAmino;
                fromAminoMsg(object: _36.PubKeyAminoMsg): _36.PubKey;
                toAminoMsg(message: _36.PubKey): _36.PubKeyAminoMsg;
                fromProtoMsg(message: _36.PubKeyProtoMsg): _36.PubKey;
                toProto(message: _36.PubKey): Uint8Array;
                toProtoMsg(message: _36.PubKey): _36.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: Partial<_36.PrivKey>): _36.PrivKey;
                fromAmino(object: _36.PrivKeyAmino): _36.PrivKey;
                toAmino(message: _36.PrivKey): _36.PrivKeyAmino;
                fromAminoMsg(object: _36.PrivKeyAminoMsg): _36.PrivKey;
                toAminoMsg(message: _36.PrivKey): _36.PrivKeyAminoMsg;
                fromProtoMsg(message: _36.PrivKeyProtoMsg): _36.PrivKey;
                toProto(message: _36.PrivKey): Uint8Array;
                toProtoMsg(message: _36.PrivKey): _36.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _37.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PubKey;
                fromJSON(object: any): _37.PubKey;
                toJSON(message: _37.PubKey): unknown;
                fromPartial(object: Partial<_37.PubKey>): _37.PubKey;
                fromAmino(object: _37.PubKeyAmino): _37.PubKey;
                toAmino(message: _37.PubKey): _37.PubKeyAmino;
                fromAminoMsg(object: _37.PubKeyAminoMsg): _37.PubKey;
                toAminoMsg(message: _37.PubKey): _37.PubKeyAminoMsg;
                fromProtoMsg(message: _37.PubKeyProtoMsg): _37.PubKey;
                toProto(message: _37.PubKey): Uint8Array;
                toProtoMsg(message: _37.PubKey): _37.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _37.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.PrivKey;
                fromJSON(object: any): _37.PrivKey;
                toJSON(message: _37.PrivKey): unknown;
                fromPartial(object: Partial<_37.PrivKey>): _37.PrivKey;
                fromAmino(object: _37.PrivKeyAmino): _37.PrivKey;
                toAmino(message: _37.PrivKey): _37.PrivKeyAmino;
                fromAminoMsg(object: _37.PrivKeyAminoMsg): _37.PrivKey;
                toAminoMsg(message: _37.PrivKey): _37.PrivKeyAminoMsg;
                fromProtoMsg(message: _37.PrivKeyProtoMsg): _37.PrivKey;
                toProto(message: _37.PrivKey): Uint8Array;
                toProtoMsg(message: _37.PrivKey): _37.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                validatorOutstandingRewards(request: _40.QueryValidatorOutstandingRewardsRequest): Promise<_40.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _40.QueryValidatorCommissionRequest): Promise<_40.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _40.QueryValidatorSlashesRequest): Promise<_40.QueryValidatorSlashesResponse>;
                delegationRewards(request: _40.QueryDelegationRewardsRequest): Promise<_40.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _40.QueryDelegationTotalRewardsRequest): Promise<_40.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _40.QueryDelegatorWithdrawAddressRequest): Promise<_40.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _40.QueryCommunityPoolRequest): Promise<_40.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _41.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _41.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _41.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _41.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _41.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _41.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _41.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _41.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _41.MsgSetWithdrawAddress) => _41.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _41.MsgSetWithdrawAddressAmino) => _41.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _41.MsgWithdrawDelegatorReward) => _41.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _41.MsgWithdrawDelegatorRewardAmino) => _41.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _41.MsgWithdrawValidatorCommission) => _41.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _41.MsgWithdrawValidatorCommissionAmino) => _41.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _41.MsgFundCommunityPool) => _41.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _41.MsgFundCommunityPoolAmino) => _41.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _41.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddress;
                fromJSON(object: any): _41.MsgSetWithdrawAddress;
                toJSON(message: _41.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_41.MsgSetWithdrawAddress>): _41.MsgSetWithdrawAddress;
                fromAmino(object: _41.MsgSetWithdrawAddressAmino): _41.MsgSetWithdrawAddress;
                toAmino(message: _41.MsgSetWithdrawAddress): _41.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _41.MsgSetWithdrawAddressAminoMsg): _41.MsgSetWithdrawAddress;
                toAminoMsg(message: _41.MsgSetWithdrawAddress): _41.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _41.MsgSetWithdrawAddressProtoMsg): _41.MsgSetWithdrawAddress;
                toProto(message: _41.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _41.MsgSetWithdrawAddress): _41.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _41.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _41.MsgSetWithdrawAddressResponse;
                toJSON(_: _41.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_41.MsgSetWithdrawAddressResponse>): _41.MsgSetWithdrawAddressResponse;
                fromAmino(_: _41.MsgSetWithdrawAddressResponseAmino): _41.MsgSetWithdrawAddressResponse;
                toAmino(_: _41.MsgSetWithdrawAddressResponse): _41.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _41.MsgSetWithdrawAddressResponseAminoMsg): _41.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _41.MsgSetWithdrawAddressResponse): _41.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _41.MsgSetWithdrawAddressResponseProtoMsg): _41.MsgSetWithdrawAddressResponse;
                toProto(message: _41.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _41.MsgSetWithdrawAddressResponse): _41.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _41.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _41.MsgWithdrawDelegatorReward;
                toJSON(message: _41.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorReward>): _41.MsgWithdrawDelegatorReward;
                fromAmino(object: _41.MsgWithdrawDelegatorRewardAmino): _41.MsgWithdrawDelegatorReward;
                toAmino(message: _41.MsgWithdrawDelegatorReward): _41.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _41.MsgWithdrawDelegatorRewardAminoMsg): _41.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _41.MsgWithdrawDelegatorReward): _41.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _41.MsgWithdrawDelegatorRewardProtoMsg): _41.MsgWithdrawDelegatorReward;
                toProto(message: _41.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _41.MsgWithdrawDelegatorReward): _41.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _41.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _41.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _41.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawDelegatorRewardResponse>): _41.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _41.MsgWithdrawDelegatorRewardResponseAmino): _41.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _41.MsgWithdrawDelegatorRewardResponse): _41.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _41.MsgWithdrawDelegatorRewardResponseAminoMsg): _41.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _41.MsgWithdrawDelegatorRewardResponse): _41.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _41.MsgWithdrawDelegatorRewardResponseProtoMsg): _41.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _41.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _41.MsgWithdrawDelegatorRewardResponse): _41.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _41.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommission;
                toJSON(message: _41.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommission>): _41.MsgWithdrawValidatorCommission;
                fromAmino(object: _41.MsgWithdrawValidatorCommissionAmino): _41.MsgWithdrawValidatorCommission;
                toAmino(message: _41.MsgWithdrawValidatorCommission): _41.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _41.MsgWithdrawValidatorCommissionAminoMsg): _41.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _41.MsgWithdrawValidatorCommission): _41.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _41.MsgWithdrawValidatorCommissionProtoMsg): _41.MsgWithdrawValidatorCommission;
                toProto(message: _41.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _41.MsgWithdrawValidatorCommission): _41.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _41.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _41.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _41.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_41.MsgWithdrawValidatorCommissionResponse>): _41.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _41.MsgWithdrawValidatorCommissionResponseAmino): _41.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _41.MsgWithdrawValidatorCommissionResponse): _41.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _41.MsgWithdrawValidatorCommissionResponseAminoMsg): _41.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _41.MsgWithdrawValidatorCommissionResponse): _41.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _41.MsgWithdrawValidatorCommissionResponseProtoMsg): _41.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _41.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _41.MsgWithdrawValidatorCommissionResponse): _41.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _41.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPool;
                fromJSON(object: any): _41.MsgFundCommunityPool;
                toJSON(message: _41.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_41.MsgFundCommunityPool>): _41.MsgFundCommunityPool;
                fromAmino(object: _41.MsgFundCommunityPoolAmino): _41.MsgFundCommunityPool;
                toAmino(message: _41.MsgFundCommunityPool): _41.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _41.MsgFundCommunityPoolAminoMsg): _41.MsgFundCommunityPool;
                toAminoMsg(message: _41.MsgFundCommunityPool): _41.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _41.MsgFundCommunityPoolProtoMsg): _41.MsgFundCommunityPool;
                toProto(message: _41.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _41.MsgFundCommunityPool): _41.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _41.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _41.MsgFundCommunityPoolResponse;
                toJSON(_: _41.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_41.MsgFundCommunityPoolResponse>): _41.MsgFundCommunityPoolResponse;
                fromAmino(_: _41.MsgFundCommunityPoolResponseAmino): _41.MsgFundCommunityPoolResponse;
                toAmino(_: _41.MsgFundCommunityPoolResponse): _41.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _41.MsgFundCommunityPoolResponseAminoMsg): _41.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _41.MsgFundCommunityPoolResponse): _41.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _41.MsgFundCommunityPoolResponseProtoMsg): _41.MsgFundCommunityPoolResponse;
                toProto(message: _41.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _41.MsgFundCommunityPoolResponse): _41.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromJSON(_: any): _40.QueryParamsRequest;
                toJSON(_: _40.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_40.QueryParamsRequest>): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromJSON(object: any): _40.QueryParamsResponse;
                toJSON(message: _40.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_40.QueryParamsResponse>): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _40.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _40.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsRequest>): _40.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _40.QueryValidatorOutstandingRewardsRequestAmino): _40.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _40.QueryValidatorOutstandingRewardsRequest): _40.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorOutstandingRewardsRequestAminoMsg): _40.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _40.QueryValidatorOutstandingRewardsRequest): _40.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorOutstandingRewardsRequestProtoMsg): _40.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _40.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorOutstandingRewardsRequest): _40.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _40.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _40.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _40.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorOutstandingRewardsResponse>): _40.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _40.QueryValidatorOutstandingRewardsResponseAmino): _40.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _40.QueryValidatorOutstandingRewardsResponse): _40.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorOutstandingRewardsResponseAminoMsg): _40.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _40.QueryValidatorOutstandingRewardsResponse): _40.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorOutstandingRewardsResponseProtoMsg): _40.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _40.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorOutstandingRewardsResponse): _40.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _40.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionRequest;
                fromJSON(object: any): _40.QueryValidatorCommissionRequest;
                toJSON(message: _40.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorCommissionRequest>): _40.QueryValidatorCommissionRequest;
                fromAmino(object: _40.QueryValidatorCommissionRequestAmino): _40.QueryValidatorCommissionRequest;
                toAmino(message: _40.QueryValidatorCommissionRequest): _40.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorCommissionRequestAminoMsg): _40.QueryValidatorCommissionRequest;
                toAminoMsg(message: _40.QueryValidatorCommissionRequest): _40.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorCommissionRequestProtoMsg): _40.QueryValidatorCommissionRequest;
                toProto(message: _40.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorCommissionRequest): _40.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _40.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorCommissionResponse;
                fromJSON(object: any): _40.QueryValidatorCommissionResponse;
                toJSON(message: _40.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorCommissionResponse>): _40.QueryValidatorCommissionResponse;
                fromAmino(object: _40.QueryValidatorCommissionResponseAmino): _40.QueryValidatorCommissionResponse;
                toAmino(message: _40.QueryValidatorCommissionResponse): _40.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorCommissionResponseAminoMsg): _40.QueryValidatorCommissionResponse;
                toAminoMsg(message: _40.QueryValidatorCommissionResponse): _40.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorCommissionResponseProtoMsg): _40.QueryValidatorCommissionResponse;
                toProto(message: _40.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorCommissionResponse): _40.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _40.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesRequest;
                fromJSON(object: any): _40.QueryValidatorSlashesRequest;
                toJSON(message: _40.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_40.QueryValidatorSlashesRequest>): _40.QueryValidatorSlashesRequest;
                fromAmino(object: _40.QueryValidatorSlashesRequestAmino): _40.QueryValidatorSlashesRequest;
                toAmino(message: _40.QueryValidatorSlashesRequest): _40.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorSlashesRequestAminoMsg): _40.QueryValidatorSlashesRequest;
                toAminoMsg(message: _40.QueryValidatorSlashesRequest): _40.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorSlashesRequestProtoMsg): _40.QueryValidatorSlashesRequest;
                toProto(message: _40.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorSlashesRequest): _40.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _40.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorSlashesResponse;
                fromJSON(object: any): _40.QueryValidatorSlashesResponse;
                toJSON(message: _40.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_40.QueryValidatorSlashesResponse>): _40.QueryValidatorSlashesResponse;
                fromAmino(object: _40.QueryValidatorSlashesResponseAmino): _40.QueryValidatorSlashesResponse;
                toAmino(message: _40.QueryValidatorSlashesResponse): _40.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorSlashesResponseAminoMsg): _40.QueryValidatorSlashesResponse;
                toAminoMsg(message: _40.QueryValidatorSlashesResponse): _40.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorSlashesResponseProtoMsg): _40.QueryValidatorSlashesResponse;
                toProto(message: _40.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorSlashesResponse): _40.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _40.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationRewardsRequest;
                toJSON(message: _40.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegationRewardsRequest>): _40.QueryDelegationRewardsRequest;
                fromAmino(object: _40.QueryDelegationRewardsRequestAmino): _40.QueryDelegationRewardsRequest;
                toAmino(message: _40.QueryDelegationRewardsRequest): _40.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegationRewardsRequestAminoMsg): _40.QueryDelegationRewardsRequest;
                toAminoMsg(message: _40.QueryDelegationRewardsRequest): _40.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationRewardsRequestProtoMsg): _40.QueryDelegationRewardsRequest;
                toProto(message: _40.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationRewardsRequest): _40.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _40.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationRewardsResponse;
                toJSON(message: _40.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegationRewardsResponse>): _40.QueryDelegationRewardsResponse;
                fromAmino(object: _40.QueryDelegationRewardsResponseAmino): _40.QueryDelegationRewardsResponse;
                toAmino(message: _40.QueryDelegationRewardsResponse): _40.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegationRewardsResponseAminoMsg): _40.QueryDelegationRewardsResponse;
                toAminoMsg(message: _40.QueryDelegationRewardsResponse): _40.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationRewardsResponseProtoMsg): _40.QueryDelegationRewardsResponse;
                toProto(message: _40.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationRewardsResponse): _40.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _40.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsRequest;
                toJSON(message: _40.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsRequest>): _40.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _40.QueryDelegationTotalRewardsRequestAmino): _40.QueryDelegationTotalRewardsRequest;
                toAmino(message: _40.QueryDelegationTotalRewardsRequest): _40.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegationTotalRewardsRequestAminoMsg): _40.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _40.QueryDelegationTotalRewardsRequest): _40.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationTotalRewardsRequestProtoMsg): _40.QueryDelegationTotalRewardsRequest;
                toProto(message: _40.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationTotalRewardsRequest): _40.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _40.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _40.QueryDelegationTotalRewardsResponse;
                toJSON(message: _40.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegationTotalRewardsResponse>): _40.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _40.QueryDelegationTotalRewardsResponseAmino): _40.QueryDelegationTotalRewardsResponse;
                toAmino(message: _40.QueryDelegationTotalRewardsResponse): _40.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegationTotalRewardsResponseAminoMsg): _40.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _40.QueryDelegationTotalRewardsResponse): _40.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationTotalRewardsResponseProtoMsg): _40.QueryDelegationTotalRewardsResponse;
                toProto(message: _40.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationTotalRewardsResponse): _40.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _40.QueryDelegatorValidatorsRequest;
                toJSON(message: _40.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsRequest>): _40.QueryDelegatorValidatorsRequest;
                fromAmino(object: _40.QueryDelegatorValidatorsRequestAmino): _40.QueryDelegatorValidatorsRequest;
                toAmino(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorsRequestAminoMsg): _40.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorsRequestProtoMsg): _40.QueryDelegatorValidatorsRequest;
                toProto(message: _40.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _40.QueryDelegatorValidatorsResponse;
                toJSON(message: _40.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorValidatorsResponse>): _40.QueryDelegatorValidatorsResponse;
                fromAmino(object: _40.QueryDelegatorValidatorsResponseAmino): _40.QueryDelegatorValidatorsResponse;
                toAmino(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorsResponseAminoMsg): _40.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorsResponseProtoMsg): _40.QueryDelegatorValidatorsResponse;
                toProto(message: _40.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _40.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _40.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressRequest>): _40.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _40.QueryDelegatorWithdrawAddressRequestAmino): _40.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _40.QueryDelegatorWithdrawAddressRequest): _40.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorWithdrawAddressRequestAminoMsg): _40.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _40.QueryDelegatorWithdrawAddressRequest): _40.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorWithdrawAddressRequestProtoMsg): _40.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _40.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorWithdrawAddressRequest): _40.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _40.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _40.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _40.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_40.QueryDelegatorWithdrawAddressResponse>): _40.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _40.QueryDelegatorWithdrawAddressResponseAmino): _40.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _40.QueryDelegatorWithdrawAddressResponse): _40.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorWithdrawAddressResponseAminoMsg): _40.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _40.QueryDelegatorWithdrawAddressResponse): _40.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorWithdrawAddressResponseProtoMsg): _40.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _40.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorWithdrawAddressResponse): _40.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _40.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolRequest;
                fromJSON(_: any): _40.QueryCommunityPoolRequest;
                toJSON(_: _40.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_40.QueryCommunityPoolRequest>): _40.QueryCommunityPoolRequest;
                fromAmino(_: _40.QueryCommunityPoolRequestAmino): _40.QueryCommunityPoolRequest;
                toAmino(_: _40.QueryCommunityPoolRequest): _40.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _40.QueryCommunityPoolRequestAminoMsg): _40.QueryCommunityPoolRequest;
                toAminoMsg(message: _40.QueryCommunityPoolRequest): _40.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _40.QueryCommunityPoolRequestProtoMsg): _40.QueryCommunityPoolRequest;
                toProto(message: _40.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _40.QueryCommunityPoolRequest): _40.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _40.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryCommunityPoolResponse;
                fromJSON(object: any): _40.QueryCommunityPoolResponse;
                toJSON(message: _40.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_40.QueryCommunityPoolResponse>): _40.QueryCommunityPoolResponse;
                fromAmino(object: _40.QueryCommunityPoolResponseAmino): _40.QueryCommunityPoolResponse;
                toAmino(message: _40.QueryCommunityPoolResponse): _40.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _40.QueryCommunityPoolResponseAminoMsg): _40.QueryCommunityPoolResponse;
                toAminoMsg(message: _40.QueryCommunityPoolResponse): _40.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _40.QueryCommunityPoolResponseProtoMsg): _40.QueryCommunityPoolResponse;
                toProto(message: _40.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _40.QueryCommunityPoolResponse): _40.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _39.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorWithdrawInfo;
                fromJSON(object: any): _39.DelegatorWithdrawInfo;
                toJSON(message: _39.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_39.DelegatorWithdrawInfo>): _39.DelegatorWithdrawInfo;
                fromAmino(object: _39.DelegatorWithdrawInfoAmino): _39.DelegatorWithdrawInfo;
                toAmino(message: _39.DelegatorWithdrawInfo): _39.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _39.DelegatorWithdrawInfoAminoMsg): _39.DelegatorWithdrawInfo;
                toAminoMsg(message: _39.DelegatorWithdrawInfo): _39.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _39.DelegatorWithdrawInfoProtoMsg): _39.DelegatorWithdrawInfo;
                toProto(message: _39.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _39.DelegatorWithdrawInfo): _39.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _39.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _39.ValidatorOutstandingRewardsRecord;
                toJSON(message: _39.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorOutstandingRewardsRecord>): _39.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _39.ValidatorOutstandingRewardsRecordAmino): _39.ValidatorOutstandingRewardsRecord;
                toAmino(message: _39.ValidatorOutstandingRewardsRecord): _39.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _39.ValidatorOutstandingRewardsRecordAminoMsg): _39.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _39.ValidatorOutstandingRewardsRecord): _39.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _39.ValidatorOutstandingRewardsRecordProtoMsg): _39.ValidatorOutstandingRewardsRecord;
                toProto(message: _39.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _39.ValidatorOutstandingRewardsRecord): _39.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _39.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _39.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _39.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorAccumulatedCommissionRecord>): _39.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _39.ValidatorAccumulatedCommissionRecordAmino): _39.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _39.ValidatorAccumulatedCommissionRecord): _39.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _39.ValidatorAccumulatedCommissionRecordAminoMsg): _39.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _39.ValidatorAccumulatedCommissionRecord): _39.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _39.ValidatorAccumulatedCommissionRecordProtoMsg): _39.ValidatorAccumulatedCommissionRecord;
                toProto(message: _39.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _39.ValidatorAccumulatedCommissionRecord): _39.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _39.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _39.ValidatorHistoricalRewardsRecord;
                toJSON(message: _39.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorHistoricalRewardsRecord>): _39.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _39.ValidatorHistoricalRewardsRecordAmino): _39.ValidatorHistoricalRewardsRecord;
                toAmino(message: _39.ValidatorHistoricalRewardsRecord): _39.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _39.ValidatorHistoricalRewardsRecordAminoMsg): _39.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _39.ValidatorHistoricalRewardsRecord): _39.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _39.ValidatorHistoricalRewardsRecordProtoMsg): _39.ValidatorHistoricalRewardsRecord;
                toProto(message: _39.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _39.ValidatorHistoricalRewardsRecord): _39.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _39.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _39.ValidatorCurrentRewardsRecord;
                toJSON(message: _39.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorCurrentRewardsRecord>): _39.ValidatorCurrentRewardsRecord;
                fromAmino(object: _39.ValidatorCurrentRewardsRecordAmino): _39.ValidatorCurrentRewardsRecord;
                toAmino(message: _39.ValidatorCurrentRewardsRecord): _39.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _39.ValidatorCurrentRewardsRecordAminoMsg): _39.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _39.ValidatorCurrentRewardsRecord): _39.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _39.ValidatorCurrentRewardsRecordProtoMsg): _39.ValidatorCurrentRewardsRecord;
                toProto(message: _39.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _39.ValidatorCurrentRewardsRecord): _39.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _39.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.DelegatorStartingInfoRecord;
                fromJSON(object: any): _39.DelegatorStartingInfoRecord;
                toJSON(message: _39.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_39.DelegatorStartingInfoRecord>): _39.DelegatorStartingInfoRecord;
                fromAmino(object: _39.DelegatorStartingInfoRecordAmino): _39.DelegatorStartingInfoRecord;
                toAmino(message: _39.DelegatorStartingInfoRecord): _39.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _39.DelegatorStartingInfoRecordAminoMsg): _39.DelegatorStartingInfoRecord;
                toAminoMsg(message: _39.DelegatorStartingInfoRecord): _39.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _39.DelegatorStartingInfoRecordProtoMsg): _39.DelegatorStartingInfoRecord;
                toProto(message: _39.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _39.DelegatorStartingInfoRecord): _39.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _39.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ValidatorSlashEventRecord;
                fromJSON(object: any): _39.ValidatorSlashEventRecord;
                toJSON(message: _39.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_39.ValidatorSlashEventRecord>): _39.ValidatorSlashEventRecord;
                fromAmino(object: _39.ValidatorSlashEventRecordAmino): _39.ValidatorSlashEventRecord;
                toAmino(message: _39.ValidatorSlashEventRecord): _39.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _39.ValidatorSlashEventRecordAminoMsg): _39.ValidatorSlashEventRecord;
                toAminoMsg(message: _39.ValidatorSlashEventRecord): _39.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _39.ValidatorSlashEventRecordProtoMsg): _39.ValidatorSlashEventRecord;
                toProto(message: _39.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _39.ValidatorSlashEventRecord): _39.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromJSON(object: any): _39.GenesisState;
                toJSON(message: _39.GenesisState): unknown;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromJSON(object: any): _38.Params;
                toJSON(message: _38.Params): unknown;
                fromPartial(object: Partial<_38.Params>): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                toAminoMsg(message: _38.Params): _38.ParamsAminoMsg;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _38.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewards;
                fromJSON(object: any): _38.ValidatorHistoricalRewards;
                toJSON(message: _38.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorHistoricalRewards>): _38.ValidatorHistoricalRewards;
                fromAmino(object: _38.ValidatorHistoricalRewardsAmino): _38.ValidatorHistoricalRewards;
                toAmino(message: _38.ValidatorHistoricalRewards): _38.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _38.ValidatorHistoricalRewardsAminoMsg): _38.ValidatorHistoricalRewards;
                toAminoMsg(message: _38.ValidatorHistoricalRewards): _38.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _38.ValidatorHistoricalRewardsProtoMsg): _38.ValidatorHistoricalRewards;
                toProto(message: _38.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _38.ValidatorHistoricalRewards): _38.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _38.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewards;
                fromJSON(object: any): _38.ValidatorCurrentRewards;
                toJSON(message: _38.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorCurrentRewards>): _38.ValidatorCurrentRewards;
                fromAmino(object: _38.ValidatorCurrentRewardsAmino): _38.ValidatorCurrentRewards;
                toAmino(message: _38.ValidatorCurrentRewards): _38.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _38.ValidatorCurrentRewardsAminoMsg): _38.ValidatorCurrentRewards;
                toAminoMsg(message: _38.ValidatorCurrentRewards): _38.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _38.ValidatorCurrentRewardsProtoMsg): _38.ValidatorCurrentRewards;
                toProto(message: _38.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _38.ValidatorCurrentRewards): _38.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _38.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommission;
                fromJSON(object: any): _38.ValidatorAccumulatedCommission;
                toJSON(message: _38.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_38.ValidatorAccumulatedCommission>): _38.ValidatorAccumulatedCommission;
                fromAmino(object: _38.ValidatorAccumulatedCommissionAmino): _38.ValidatorAccumulatedCommission;
                toAmino(message: _38.ValidatorAccumulatedCommission): _38.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _38.ValidatorAccumulatedCommissionAminoMsg): _38.ValidatorAccumulatedCommission;
                toAminoMsg(message: _38.ValidatorAccumulatedCommission): _38.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _38.ValidatorAccumulatedCommissionProtoMsg): _38.ValidatorAccumulatedCommission;
                toProto(message: _38.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _38.ValidatorAccumulatedCommission): _38.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _38.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewards;
                fromJSON(object: any): _38.ValidatorOutstandingRewards;
                toJSON(message: _38.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_38.ValidatorOutstandingRewards>): _38.ValidatorOutstandingRewards;
                fromAmino(object: _38.ValidatorOutstandingRewardsAmino): _38.ValidatorOutstandingRewards;
                toAmino(message: _38.ValidatorOutstandingRewards): _38.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _38.ValidatorOutstandingRewardsAminoMsg): _38.ValidatorOutstandingRewards;
                toAminoMsg(message: _38.ValidatorOutstandingRewards): _38.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _38.ValidatorOutstandingRewardsProtoMsg): _38.ValidatorOutstandingRewards;
                toProto(message: _38.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _38.ValidatorOutstandingRewards): _38.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _38.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvent;
                fromJSON(object: any): _38.ValidatorSlashEvent;
                toJSON(message: _38.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_38.ValidatorSlashEvent>): _38.ValidatorSlashEvent;
                fromAmino(object: _38.ValidatorSlashEventAmino): _38.ValidatorSlashEvent;
                toAmino(message: _38.ValidatorSlashEvent): _38.ValidatorSlashEventAmino;
                fromAminoMsg(object: _38.ValidatorSlashEventAminoMsg): _38.ValidatorSlashEvent;
                toAminoMsg(message: _38.ValidatorSlashEvent): _38.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _38.ValidatorSlashEventProtoMsg): _38.ValidatorSlashEvent;
                toProto(message: _38.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _38.ValidatorSlashEvent): _38.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _38.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEvents;
                fromJSON(object: any): _38.ValidatorSlashEvents;
                toJSON(message: _38.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_38.ValidatorSlashEvents>): _38.ValidatorSlashEvents;
                fromAmino(object: _38.ValidatorSlashEventsAmino): _38.ValidatorSlashEvents;
                toAmino(message: _38.ValidatorSlashEvents): _38.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _38.ValidatorSlashEventsAminoMsg): _38.ValidatorSlashEvents;
                toAminoMsg(message: _38.ValidatorSlashEvents): _38.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _38.ValidatorSlashEventsProtoMsg): _38.ValidatorSlashEvents;
                toProto(message: _38.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _38.ValidatorSlashEvents): _38.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _38.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.FeePool;
                fromJSON(object: any): _38.FeePool;
                toJSON(message: _38.FeePool): unknown;
                fromPartial(object: Partial<_38.FeePool>): _38.FeePool;
                fromAmino(object: _38.FeePoolAmino): _38.FeePool;
                toAmino(message: _38.FeePool): _38.FeePoolAmino;
                fromAminoMsg(object: _38.FeePoolAminoMsg): _38.FeePool;
                toAminoMsg(message: _38.FeePool): _38.FeePoolAminoMsg;
                fromProtoMsg(message: _38.FeePoolProtoMsg): _38.FeePool;
                toProto(message: _38.FeePool): Uint8Array;
                toProtoMsg(message: _38.FeePool): _38.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _38.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposal;
                fromJSON(object: any): _38.CommunityPoolSpendProposal;
                toJSON(message: _38.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposal>): _38.CommunityPoolSpendProposal;
                fromAmino(object: _38.CommunityPoolSpendProposalAmino): _38.CommunityPoolSpendProposal;
                toAmino(message: _38.CommunityPoolSpendProposal): _38.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _38.CommunityPoolSpendProposalAminoMsg): _38.CommunityPoolSpendProposal;
                toAminoMsg(message: _38.CommunityPoolSpendProposal): _38.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _38.CommunityPoolSpendProposalProtoMsg): _38.CommunityPoolSpendProposal;
                toProto(message: _38.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _38.CommunityPoolSpendProposal): _38.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _38.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfo;
                fromJSON(object: any): _38.DelegatorStartingInfo;
                toJSON(message: _38.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_38.DelegatorStartingInfo>): _38.DelegatorStartingInfo;
                fromAmino(object: _38.DelegatorStartingInfoAmino): _38.DelegatorStartingInfo;
                toAmino(message: _38.DelegatorStartingInfo): _38.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _38.DelegatorStartingInfoAminoMsg): _38.DelegatorStartingInfo;
                toAminoMsg(message: _38.DelegatorStartingInfo): _38.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _38.DelegatorStartingInfoProtoMsg): _38.DelegatorStartingInfo;
                toProto(message: _38.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _38.DelegatorStartingInfo): _38.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _38.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegationDelegatorReward;
                fromJSON(object: any): _38.DelegationDelegatorReward;
                toJSON(message: _38.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_38.DelegationDelegatorReward>): _38.DelegationDelegatorReward;
                fromAmino(object: _38.DelegationDelegatorRewardAmino): _38.DelegationDelegatorReward;
                toAmino(message: _38.DelegationDelegatorReward): _38.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _38.DelegationDelegatorRewardAminoMsg): _38.DelegationDelegatorReward;
                toAminoMsg(message: _38.DelegationDelegatorReward): _38.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _38.DelegationDelegatorRewardProtoMsg): _38.DelegationDelegatorReward;
                toProto(message: _38.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _38.DelegationDelegatorReward): _38.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _38.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _38.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _38.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_38.CommunityPoolSpendProposalWithDeposit>): _38.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _38.CommunityPoolSpendProposalWithDepositAmino): _38.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _38.CommunityPoolSpendProposalWithDeposit): _38.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _38.CommunityPoolSpendProposalWithDepositAminoMsg): _38.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _38.CommunityPoolSpendProposalWithDeposit): _38.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _38.CommunityPoolSpendProposalWithDepositProtoMsg): _38.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _38.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _38.CommunityPoolSpendProposalWithDeposit): _38.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _44.QueryEvidenceRequest): Promise<_44.QueryEvidenceResponse>;
                allEvidence(request?: _44.QueryAllEvidenceRequest): Promise<_44.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _45.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _45.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _45.MsgSubmitEvidence) => _45.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _45.MsgSubmitEvidenceAmino) => _45.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _45.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidence;
                fromJSON(object: any): _45.MsgSubmitEvidence;
                toJSON(message: _45.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_45.MsgSubmitEvidence>): _45.MsgSubmitEvidence;
                fromAmino(object: _45.MsgSubmitEvidenceAmino): _45.MsgSubmitEvidence;
                toAmino(message: _45.MsgSubmitEvidence): _45.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _45.MsgSubmitEvidenceAminoMsg): _45.MsgSubmitEvidence;
                toAminoMsg(message: _45.MsgSubmitEvidence): _45.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _45.MsgSubmitEvidenceProtoMsg): _45.MsgSubmitEvidence;
                toProto(message: _45.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _45.MsgSubmitEvidence): _45.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _45.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _45.MsgSubmitEvidenceResponse;
                toJSON(message: _45.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_45.MsgSubmitEvidenceResponse>): _45.MsgSubmitEvidenceResponse;
                fromAmino(object: _45.MsgSubmitEvidenceResponseAmino): _45.MsgSubmitEvidenceResponse;
                toAmino(message: _45.MsgSubmitEvidenceResponse): _45.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _45.MsgSubmitEvidenceResponseAminoMsg): _45.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _45.MsgSubmitEvidenceResponse): _45.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _45.MsgSubmitEvidenceResponseProtoMsg): _45.MsgSubmitEvidenceResponse;
                toProto(message: _45.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _45.MsgSubmitEvidenceResponse): _45.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _44.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceRequest;
                fromJSON(object: any): _44.QueryEvidenceRequest;
                toJSON(message: _44.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_44.QueryEvidenceRequest>): _44.QueryEvidenceRequest;
                fromAmino(object: _44.QueryEvidenceRequestAmino): _44.QueryEvidenceRequest;
                toAmino(message: _44.QueryEvidenceRequest): _44.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _44.QueryEvidenceRequestAminoMsg): _44.QueryEvidenceRequest;
                toAminoMsg(message: _44.QueryEvidenceRequest): _44.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _44.QueryEvidenceRequestProtoMsg): _44.QueryEvidenceRequest;
                toProto(message: _44.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _44.QueryEvidenceRequest): _44.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _44.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryEvidenceResponse;
                fromJSON(object: any): _44.QueryEvidenceResponse;
                toJSON(message: _44.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_44.QueryEvidenceResponse>): _44.QueryEvidenceResponse;
                fromAmino(object: _44.QueryEvidenceResponseAmino): _44.QueryEvidenceResponse;
                toAmino(message: _44.QueryEvidenceResponse): _44.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _44.QueryEvidenceResponseAminoMsg): _44.QueryEvidenceResponse;
                toAminoMsg(message: _44.QueryEvidenceResponse): _44.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _44.QueryEvidenceResponseProtoMsg): _44.QueryEvidenceResponse;
                toProto(message: _44.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _44.QueryEvidenceResponse): _44.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _44.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceRequest;
                fromJSON(object: any): _44.QueryAllEvidenceRequest;
                toJSON(message: _44.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_44.QueryAllEvidenceRequest>): _44.QueryAllEvidenceRequest;
                fromAmino(object: _44.QueryAllEvidenceRequestAmino): _44.QueryAllEvidenceRequest;
                toAmino(message: _44.QueryAllEvidenceRequest): _44.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _44.QueryAllEvidenceRequestAminoMsg): _44.QueryAllEvidenceRequest;
                toAminoMsg(message: _44.QueryAllEvidenceRequest): _44.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAllEvidenceRequestProtoMsg): _44.QueryAllEvidenceRequest;
                toProto(message: _44.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAllEvidenceRequest): _44.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _44.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllEvidenceResponse;
                fromJSON(object: any): _44.QueryAllEvidenceResponse;
                toJSON(message: _44.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_44.QueryAllEvidenceResponse>): _44.QueryAllEvidenceResponse;
                fromAmino(object: _44.QueryAllEvidenceResponseAmino): _44.QueryAllEvidenceResponse;
                toAmino(message: _44.QueryAllEvidenceResponse): _44.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _44.QueryAllEvidenceResponseAminoMsg): _44.QueryAllEvidenceResponse;
                toAminoMsg(message: _44.QueryAllEvidenceResponse): _44.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _44.QueryAllEvidenceResponseProtoMsg): _44.QueryAllEvidenceResponse;
                toProto(message: _44.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _44.QueryAllEvidenceResponse): _44.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
                fromAmino(object: _43.GenesisStateAmino): _43.GenesisState;
                toAmino(message: _43.GenesisState): _43.GenesisStateAmino;
                fromAminoMsg(object: _43.GenesisStateAminoMsg): _43.GenesisState;
                toAminoMsg(message: _43.GenesisState): _43.GenesisStateAminoMsg;
                fromProtoMsg(message: _43.GenesisStateProtoMsg): _43.GenesisState;
                toProto(message: _43.GenesisState): Uint8Array;
                toProtoMsg(message: _43.GenesisState): _43.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _42.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Equivocation;
                fromJSON(object: any): _42.Equivocation;
                toJSON(message: _42.Equivocation): unknown;
                fromPartial(object: Partial<_42.Equivocation>): _42.Equivocation;
                fromAmino(object: _42.EquivocationAmino): _42.Equivocation;
                toAmino(message: _42.Equivocation): _42.EquivocationAmino;
                fromAminoMsg(object: _42.EquivocationAminoMsg): _42.Equivocation;
                toAminoMsg(message: _42.Equivocation): _42.EquivocationAminoMsg;
                fromProtoMsg(message: _42.EquivocationProtoMsg): _42.Equivocation;
                toProto(message: _42.Equivocation): Uint8Array;
                toProtoMsg(message: _42.Equivocation): _42.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _48.QueryAllowanceRequest): Promise<_48.QueryAllowanceResponse>;
                allowances(request: _48.QueryAllowancesRequest): Promise<_48.QueryAllowancesResponse>;
                allowancesByGranter(request: _48.QueryAllowancesByGranterRequest): Promise<_48.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _49.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _49.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _49.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _49.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _49.MsgGrantAllowance) => _49.MsgGrantAllowanceAmino;
                    fromAmino: (object: _49.MsgGrantAllowanceAmino) => _49.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _49.MsgRevokeAllowance) => _49.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _49.MsgRevokeAllowanceAmino) => _49.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _49.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowance;
                fromJSON(object: any): _49.MsgGrantAllowance;
                toJSON(message: _49.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_49.MsgGrantAllowance>): _49.MsgGrantAllowance;
                fromAmino(object: _49.MsgGrantAllowanceAmino): _49.MsgGrantAllowance;
                toAmino(message: _49.MsgGrantAllowance): _49.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _49.MsgGrantAllowanceAminoMsg): _49.MsgGrantAllowance;
                toAminoMsg(message: _49.MsgGrantAllowance): _49.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _49.MsgGrantAllowanceProtoMsg): _49.MsgGrantAllowance;
                toProto(message: _49.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _49.MsgGrantAllowance): _49.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _49.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgGrantAllowanceResponse;
                fromJSON(_: any): _49.MsgGrantAllowanceResponse;
                toJSON(_: _49.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_49.MsgGrantAllowanceResponse>): _49.MsgGrantAllowanceResponse;
                fromAmino(_: _49.MsgGrantAllowanceResponseAmino): _49.MsgGrantAllowanceResponse;
                toAmino(_: _49.MsgGrantAllowanceResponse): _49.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _49.MsgGrantAllowanceResponseAminoMsg): _49.MsgGrantAllowanceResponse;
                toAminoMsg(message: _49.MsgGrantAllowanceResponse): _49.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _49.MsgGrantAllowanceResponseProtoMsg): _49.MsgGrantAllowanceResponse;
                toProto(message: _49.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _49.MsgGrantAllowanceResponse): _49.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _49.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowance;
                fromJSON(object: any): _49.MsgRevokeAllowance;
                toJSON(message: _49.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_49.MsgRevokeAllowance>): _49.MsgRevokeAllowance;
                fromAmino(object: _49.MsgRevokeAllowanceAmino): _49.MsgRevokeAllowance;
                toAmino(message: _49.MsgRevokeAllowance): _49.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _49.MsgRevokeAllowanceAminoMsg): _49.MsgRevokeAllowance;
                toAminoMsg(message: _49.MsgRevokeAllowance): _49.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _49.MsgRevokeAllowanceProtoMsg): _49.MsgRevokeAllowance;
                toProto(message: _49.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _49.MsgRevokeAllowance): _49.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _49.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _49.MsgRevokeAllowanceResponse;
                toJSON(_: _49.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_49.MsgRevokeAllowanceResponse>): _49.MsgRevokeAllowanceResponse;
                fromAmino(_: _49.MsgRevokeAllowanceResponseAmino): _49.MsgRevokeAllowanceResponse;
                toAmino(_: _49.MsgRevokeAllowanceResponse): _49.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _49.MsgRevokeAllowanceResponseAminoMsg): _49.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _49.MsgRevokeAllowanceResponse): _49.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _49.MsgRevokeAllowanceResponseProtoMsg): _49.MsgRevokeAllowanceResponse;
                toProto(message: _49.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _49.MsgRevokeAllowanceResponse): _49.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceRequest;
                fromJSON(object: any): _48.QueryAllowanceRequest;
                toJSON(message: _48.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowanceRequest>): _48.QueryAllowanceRequest;
                fromAmino(object: _48.QueryAllowanceRequestAmino): _48.QueryAllowanceRequest;
                toAmino(message: _48.QueryAllowanceRequest): _48.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _48.QueryAllowanceRequestAminoMsg): _48.QueryAllowanceRequest;
                toAminoMsg(message: _48.QueryAllowanceRequest): _48.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllowanceRequestProtoMsg): _48.QueryAllowanceRequest;
                toProto(message: _48.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllowanceRequest): _48.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowanceResponse;
                fromJSON(object: any): _48.QueryAllowanceResponse;
                toJSON(message: _48.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowanceResponse>): _48.QueryAllowanceResponse;
                fromAmino(object: _48.QueryAllowanceResponseAmino): _48.QueryAllowanceResponse;
                toAmino(message: _48.QueryAllowanceResponse): _48.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _48.QueryAllowanceResponseAminoMsg): _48.QueryAllowanceResponse;
                toAminoMsg(message: _48.QueryAllowanceResponse): _48.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllowanceResponseProtoMsg): _48.QueryAllowanceResponse;
                toProto(message: _48.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllowanceResponse): _48.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesRequest;
                fromJSON(object: any): _48.QueryAllowancesRequest;
                toJSON(message: _48.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesRequest>): _48.QueryAllowancesRequest;
                fromAmino(object: _48.QueryAllowancesRequestAmino): _48.QueryAllowancesRequest;
                toAmino(message: _48.QueryAllowancesRequest): _48.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _48.QueryAllowancesRequestAminoMsg): _48.QueryAllowancesRequest;
                toAminoMsg(message: _48.QueryAllowancesRequest): _48.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllowancesRequestProtoMsg): _48.QueryAllowancesRequest;
                toProto(message: _48.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllowancesRequest): _48.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesResponse;
                fromJSON(object: any): _48.QueryAllowancesResponse;
                toJSON(message: _48.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesResponse>): _48.QueryAllowancesResponse;
                fromAmino(object: _48.QueryAllowancesResponseAmino): _48.QueryAllowancesResponse;
                toAmino(message: _48.QueryAllowancesResponse): _48.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _48.QueryAllowancesResponseAminoMsg): _48.QueryAllowancesResponse;
                toAminoMsg(message: _48.QueryAllowancesResponse): _48.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllowancesResponseProtoMsg): _48.QueryAllowancesResponse;
                toProto(message: _48.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllowancesResponse): _48.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _48.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _48.QueryAllowancesByGranterRequest;
                toJSON(message: _48.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterRequest>): _48.QueryAllowancesByGranterRequest;
                fromAmino(object: _48.QueryAllowancesByGranterRequestAmino): _48.QueryAllowancesByGranterRequest;
                toAmino(message: _48.QueryAllowancesByGranterRequest): _48.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _48.QueryAllowancesByGranterRequestAminoMsg): _48.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _48.QueryAllowancesByGranterRequest): _48.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAllowancesByGranterRequestProtoMsg): _48.QueryAllowancesByGranterRequest;
                toProto(message: _48.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAllowancesByGranterRequest): _48.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _48.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _48.QueryAllowancesByGranterResponse;
                toJSON(message: _48.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_48.QueryAllowancesByGranterResponse>): _48.QueryAllowancesByGranterResponse;
                fromAmino(object: _48.QueryAllowancesByGranterResponseAmino): _48.QueryAllowancesByGranterResponse;
                toAmino(message: _48.QueryAllowancesByGranterResponse): _48.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _48.QueryAllowancesByGranterResponseAminoMsg): _48.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _48.QueryAllowancesByGranterResponse): _48.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _48.QueryAllowancesByGranterResponseProtoMsg): _48.QueryAllowancesByGranterResponse;
                toProto(message: _48.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _48.QueryAllowancesByGranterResponse): _48.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
                fromAmino(object: _47.GenesisStateAmino): _47.GenesisState;
                toAmino(message: _47.GenesisState): _47.GenesisStateAmino;
                fromAminoMsg(object: _47.GenesisStateAminoMsg): _47.GenesisState;
                toAminoMsg(message: _47.GenesisState): _47.GenesisStateAminoMsg;
                fromProtoMsg(message: _47.GenesisStateProtoMsg): _47.GenesisState;
                toProto(message: _47.GenesisState): Uint8Array;
                toProtoMsg(message: _47.GenesisState): _47.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _46.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.BasicAllowance;
                fromJSON(object: any): _46.BasicAllowance;
                toJSON(message: _46.BasicAllowance): unknown;
                fromPartial(object: Partial<_46.BasicAllowance>): _46.BasicAllowance;
                fromAmino(object: _46.BasicAllowanceAmino): _46.BasicAllowance;
                toAmino(message: _46.BasicAllowance): _46.BasicAllowanceAmino;
                fromAminoMsg(object: _46.BasicAllowanceAminoMsg): _46.BasicAllowance;
                toAminoMsg(message: _46.BasicAllowance): _46.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _46.BasicAllowanceProtoMsg): _46.BasicAllowance;
                toProto(message: _46.BasicAllowance): Uint8Array;
                toProtoMsg(message: _46.BasicAllowance): _46.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _46.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PeriodicAllowance;
                fromJSON(object: any): _46.PeriodicAllowance;
                toJSON(message: _46.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_46.PeriodicAllowance>): _46.PeriodicAllowance;
                fromAmino(object: _46.PeriodicAllowanceAmino): _46.PeriodicAllowance;
                toAmino(message: _46.PeriodicAllowance): _46.PeriodicAllowanceAmino;
                fromAminoMsg(object: _46.PeriodicAllowanceAminoMsg): _46.PeriodicAllowance;
                toAminoMsg(message: _46.PeriodicAllowance): _46.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _46.PeriodicAllowanceProtoMsg): _46.PeriodicAllowance;
                toProto(message: _46.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _46.PeriodicAllowance): _46.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _46.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AllowedMsgAllowance;
                fromJSON(object: any): _46.AllowedMsgAllowance;
                toJSON(message: _46.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_46.AllowedMsgAllowance>): _46.AllowedMsgAllowance;
                fromAmino(object: _46.AllowedMsgAllowanceAmino): _46.AllowedMsgAllowance;
                toAmino(message: _46.AllowedMsgAllowance): _46.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _46.AllowedMsgAllowanceAminoMsg): _46.AllowedMsgAllowance;
                toAminoMsg(message: _46.AllowedMsgAllowance): _46.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _46.AllowedMsgAllowanceProtoMsg): _46.AllowedMsgAllowance;
                toProto(message: _46.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _46.AllowedMsgAllowance): _46.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _46.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Grant;
                fromJSON(object: any): _46.Grant;
                toJSON(message: _46.Grant): unknown;
                fromPartial(object: Partial<_46.Grant>): _46.Grant;
                fromAmino(object: _46.GrantAmino): _46.Grant;
                toAmino(message: _46.Grant): _46.GrantAmino;
                fromAminoMsg(object: _46.GrantAminoMsg): _46.Grant;
                toAminoMsg(message: _46.Grant): _46.GrantAminoMsg;
                fromProtoMsg(message: _46.GrantProtoMsg): _46.Grant;
                toProto(message: _46.Grant): Uint8Array;
                toProtoMsg(message: _46.Grant): _46.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _53.QueryProposalRequest): Promise<_53.QueryProposalResponse>;
                proposals(request: _53.QueryProposalsRequest): Promise<_53.QueryProposalsResponse>;
                vote(request: _53.QueryVoteRequest): Promise<_53.QueryVoteResponse>;
                votes(request: _53.QueryVotesRequest): Promise<_53.QueryVotesResponse>;
                params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                deposit(request: _53.QueryDepositRequest): Promise<_53.QueryDepositResponse>;
                deposits(request: _53.QueryDepositsRequest): Promise<_53.QueryDepositsResponse>;
                tallyResult(request: _53.QueryTallyResultRequest): Promise<_53.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _54.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _54.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _54.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _54.MsgExecLegacyContent;
                    };
                    vote(value: _54.MsgVote): {
                        typeUrl: string;
                        value: _54.MsgVote;
                    };
                    voteWeighted(value: _54.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _54.MsgVoteWeighted;
                    };
                    deposit(value: _54.MsgDeposit): {
                        typeUrl: string;
                        value: _54.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _54.MsgSubmitProposal) => _54.MsgSubmitProposalAmino;
                    fromAmino: (object: _54.MsgSubmitProposalAmino) => _54.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _54.MsgExecLegacyContent) => _54.MsgExecLegacyContentAmino;
                    fromAmino: (object: _54.MsgExecLegacyContentAmino) => _54.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _54.MsgVote) => _54.MsgVoteAmino;
                    fromAmino: (object: _54.MsgVoteAmino) => _54.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _54.MsgVoteWeighted) => _54.MsgVoteWeightedAmino;
                    fromAmino: (object: _54.MsgVoteWeightedAmino) => _54.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _54.MsgDeposit) => _54.MsgDepositAmino;
                    fromAmino: (object: _54.MsgDepositAmino) => _54.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _54.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposal;
                fromJSON(object: any): _54.MsgSubmitProposal;
                toJSON(message: _54.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_54.MsgSubmitProposal>): _54.MsgSubmitProposal;
                fromAmino(object: _54.MsgSubmitProposalAmino): _54.MsgSubmitProposal;
                toAmino(message: _54.MsgSubmitProposal): _54.MsgSubmitProposalAmino;
                fromAminoMsg(object: _54.MsgSubmitProposalAminoMsg): _54.MsgSubmitProposal;
                toAminoMsg(message: _54.MsgSubmitProposal): _54.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _54.MsgSubmitProposalProtoMsg): _54.MsgSubmitProposal;
                toProto(message: _54.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _54.MsgSubmitProposal): _54.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _54.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgSubmitProposalResponse;
                fromJSON(object: any): _54.MsgSubmitProposalResponse;
                toJSON(message: _54.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_54.MsgSubmitProposalResponse>): _54.MsgSubmitProposalResponse;
                fromAmino(object: _54.MsgSubmitProposalResponseAmino): _54.MsgSubmitProposalResponse;
                toAmino(message: _54.MsgSubmitProposalResponse): _54.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _54.MsgSubmitProposalResponseAminoMsg): _54.MsgSubmitProposalResponse;
                toAminoMsg(message: _54.MsgSubmitProposalResponse): _54.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _54.MsgSubmitProposalResponseProtoMsg): _54.MsgSubmitProposalResponse;
                toProto(message: _54.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _54.MsgSubmitProposalResponse): _54.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _54.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContent;
                fromJSON(object: any): _54.MsgExecLegacyContent;
                toJSON(message: _54.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_54.MsgExecLegacyContent>): _54.MsgExecLegacyContent;
                fromAmino(object: _54.MsgExecLegacyContentAmino): _54.MsgExecLegacyContent;
                toAmino(message: _54.MsgExecLegacyContent): _54.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _54.MsgExecLegacyContentAminoMsg): _54.MsgExecLegacyContent;
                toAminoMsg(message: _54.MsgExecLegacyContent): _54.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _54.MsgExecLegacyContentProtoMsg): _54.MsgExecLegacyContent;
                toProto(message: _54.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _54.MsgExecLegacyContent): _54.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _54.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgExecLegacyContentResponse;
                fromJSON(_: any): _54.MsgExecLegacyContentResponse;
                toJSON(_: _54.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_54.MsgExecLegacyContentResponse>): _54.MsgExecLegacyContentResponse;
                fromAmino(_: _54.MsgExecLegacyContentResponseAmino): _54.MsgExecLegacyContentResponse;
                toAmino(_: _54.MsgExecLegacyContentResponse): _54.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _54.MsgExecLegacyContentResponseAminoMsg): _54.MsgExecLegacyContentResponse;
                toAminoMsg(message: _54.MsgExecLegacyContentResponse): _54.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _54.MsgExecLegacyContentResponseProtoMsg): _54.MsgExecLegacyContentResponse;
                toProto(message: _54.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _54.MsgExecLegacyContentResponse): _54.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _54.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVote;
                fromJSON(object: any): _54.MsgVote;
                toJSON(message: _54.MsgVote): unknown;
                fromPartial(object: Partial<_54.MsgVote>): _54.MsgVote;
                fromAmino(object: _54.MsgVoteAmino): _54.MsgVote;
                toAmino(message: _54.MsgVote): _54.MsgVoteAmino;
                fromAminoMsg(object: _54.MsgVoteAminoMsg): _54.MsgVote;
                toAminoMsg(message: _54.MsgVote): _54.MsgVoteAminoMsg;
                fromProtoMsg(message: _54.MsgVoteProtoMsg): _54.MsgVote;
                toProto(message: _54.MsgVote): Uint8Array;
                toProtoMsg(message: _54.MsgVote): _54.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _54.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteResponse;
                fromJSON(_: any): _54.MsgVoteResponse;
                toJSON(_: _54.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_54.MsgVoteResponse>): _54.MsgVoteResponse;
                fromAmino(_: _54.MsgVoteResponseAmino): _54.MsgVoteResponse;
                toAmino(_: _54.MsgVoteResponse): _54.MsgVoteResponseAmino;
                fromAminoMsg(object: _54.MsgVoteResponseAminoMsg): _54.MsgVoteResponse;
                toAminoMsg(message: _54.MsgVoteResponse): _54.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _54.MsgVoteResponseProtoMsg): _54.MsgVoteResponse;
                toProto(message: _54.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _54.MsgVoteResponse): _54.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _54.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeighted;
                fromJSON(object: any): _54.MsgVoteWeighted;
                toJSON(message: _54.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_54.MsgVoteWeighted>): _54.MsgVoteWeighted;
                fromAmino(object: _54.MsgVoteWeightedAmino): _54.MsgVoteWeighted;
                toAmino(message: _54.MsgVoteWeighted): _54.MsgVoteWeightedAmino;
                fromAminoMsg(object: _54.MsgVoteWeightedAminoMsg): _54.MsgVoteWeighted;
                toAminoMsg(message: _54.MsgVoteWeighted): _54.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _54.MsgVoteWeightedProtoMsg): _54.MsgVoteWeighted;
                toProto(message: _54.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _54.MsgVoteWeighted): _54.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _54.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgVoteWeightedResponse;
                fromJSON(_: any): _54.MsgVoteWeightedResponse;
                toJSON(_: _54.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_54.MsgVoteWeightedResponse>): _54.MsgVoteWeightedResponse;
                fromAmino(_: _54.MsgVoteWeightedResponseAmino): _54.MsgVoteWeightedResponse;
                toAmino(_: _54.MsgVoteWeightedResponse): _54.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _54.MsgVoteWeightedResponseAminoMsg): _54.MsgVoteWeightedResponse;
                toAminoMsg(message: _54.MsgVoteWeightedResponse): _54.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _54.MsgVoteWeightedResponseProtoMsg): _54.MsgVoteWeightedResponse;
                toProto(message: _54.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _54.MsgVoteWeightedResponse): _54.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _54.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDeposit;
                fromJSON(object: any): _54.MsgDeposit;
                toJSON(message: _54.MsgDeposit): unknown;
                fromPartial(object: Partial<_54.MsgDeposit>): _54.MsgDeposit;
                fromAmino(object: _54.MsgDepositAmino): _54.MsgDeposit;
                toAmino(message: _54.MsgDeposit): _54.MsgDepositAmino;
                fromAminoMsg(object: _54.MsgDepositAminoMsg): _54.MsgDeposit;
                toAminoMsg(message: _54.MsgDeposit): _54.MsgDepositAminoMsg;
                fromProtoMsg(message: _54.MsgDepositProtoMsg): _54.MsgDeposit;
                toProto(message: _54.MsgDeposit): Uint8Array;
                toProtoMsg(message: _54.MsgDeposit): _54.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _54.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgDepositResponse;
                fromJSON(_: any): _54.MsgDepositResponse;
                toJSON(_: _54.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_54.MsgDepositResponse>): _54.MsgDepositResponse;
                fromAmino(_: _54.MsgDepositResponseAmino): _54.MsgDepositResponse;
                toAmino(_: _54.MsgDepositResponse): _54.MsgDepositResponseAmino;
                fromAminoMsg(object: _54.MsgDepositResponseAminoMsg): _54.MsgDepositResponse;
                toAminoMsg(message: _54.MsgDepositResponse): _54.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _54.MsgDepositResponseProtoMsg): _54.MsgDepositResponse;
                toProto(message: _54.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _54.MsgDepositResponse): _54.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _53.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalRequest;
                fromJSON(object: any): _53.QueryProposalRequest;
                toJSON(message: _53.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_53.QueryProposalRequest>): _53.QueryProposalRequest;
                fromAmino(object: _53.QueryProposalRequestAmino): _53.QueryProposalRequest;
                toAmino(message: _53.QueryProposalRequest): _53.QueryProposalRequestAmino;
                fromAminoMsg(object: _53.QueryProposalRequestAminoMsg): _53.QueryProposalRequest;
                toAminoMsg(message: _53.QueryProposalRequest): _53.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _53.QueryProposalRequestProtoMsg): _53.QueryProposalRequest;
                toProto(message: _53.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _53.QueryProposalRequest): _53.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _53.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalResponse;
                fromJSON(object: any): _53.QueryProposalResponse;
                toJSON(message: _53.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_53.QueryProposalResponse>): _53.QueryProposalResponse;
                fromAmino(object: _53.QueryProposalResponseAmino): _53.QueryProposalResponse;
                toAmino(message: _53.QueryProposalResponse): _53.QueryProposalResponseAmino;
                fromAminoMsg(object: _53.QueryProposalResponseAminoMsg): _53.QueryProposalResponse;
                toAminoMsg(message: _53.QueryProposalResponse): _53.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _53.QueryProposalResponseProtoMsg): _53.QueryProposalResponse;
                toProto(message: _53.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _53.QueryProposalResponse): _53.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _53.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsRequest;
                fromJSON(object: any): _53.QueryProposalsRequest;
                toJSON(message: _53.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_53.QueryProposalsRequest>): _53.QueryProposalsRequest;
                fromAmino(object: _53.QueryProposalsRequestAmino): _53.QueryProposalsRequest;
                toAmino(message: _53.QueryProposalsRequest): _53.QueryProposalsRequestAmino;
                fromAminoMsg(object: _53.QueryProposalsRequestAminoMsg): _53.QueryProposalsRequest;
                toAminoMsg(message: _53.QueryProposalsRequest): _53.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryProposalsRequestProtoMsg): _53.QueryProposalsRequest;
                toProto(message: _53.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryProposalsRequest): _53.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _53.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryProposalsResponse;
                fromJSON(object: any): _53.QueryProposalsResponse;
                toJSON(message: _53.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_53.QueryProposalsResponse>): _53.QueryProposalsResponse;
                fromAmino(object: _53.QueryProposalsResponseAmino): _53.QueryProposalsResponse;
                toAmino(message: _53.QueryProposalsResponse): _53.QueryProposalsResponseAmino;
                fromAminoMsg(object: _53.QueryProposalsResponseAminoMsg): _53.QueryProposalsResponse;
                toAminoMsg(message: _53.QueryProposalsResponse): _53.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryProposalsResponseProtoMsg): _53.QueryProposalsResponse;
                toProto(message: _53.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryProposalsResponse): _53.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _53.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteRequest;
                fromJSON(object: any): _53.QueryVoteRequest;
                toJSON(message: _53.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_53.QueryVoteRequest>): _53.QueryVoteRequest;
                fromAmino(object: _53.QueryVoteRequestAmino): _53.QueryVoteRequest;
                toAmino(message: _53.QueryVoteRequest): _53.QueryVoteRequestAmino;
                fromAminoMsg(object: _53.QueryVoteRequestAminoMsg): _53.QueryVoteRequest;
                toAminoMsg(message: _53.QueryVoteRequest): _53.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _53.QueryVoteRequestProtoMsg): _53.QueryVoteRequest;
                toProto(message: _53.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _53.QueryVoteRequest): _53.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _53.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVoteResponse;
                fromJSON(object: any): _53.QueryVoteResponse;
                toJSON(message: _53.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_53.QueryVoteResponse>): _53.QueryVoteResponse;
                fromAmino(object: _53.QueryVoteResponseAmino): _53.QueryVoteResponse;
                toAmino(message: _53.QueryVoteResponse): _53.QueryVoteResponseAmino;
                fromAminoMsg(object: _53.QueryVoteResponseAminoMsg): _53.QueryVoteResponse;
                toAminoMsg(message: _53.QueryVoteResponse): _53.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _53.QueryVoteResponseProtoMsg): _53.QueryVoteResponse;
                toProto(message: _53.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _53.QueryVoteResponse): _53.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _53.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesRequest;
                fromJSON(object: any): _53.QueryVotesRequest;
                toJSON(message: _53.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_53.QueryVotesRequest>): _53.QueryVotesRequest;
                fromAmino(object: _53.QueryVotesRequestAmino): _53.QueryVotesRequest;
                toAmino(message: _53.QueryVotesRequest): _53.QueryVotesRequestAmino;
                fromAminoMsg(object: _53.QueryVotesRequestAminoMsg): _53.QueryVotesRequest;
                toAminoMsg(message: _53.QueryVotesRequest): _53.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _53.QueryVotesRequestProtoMsg): _53.QueryVotesRequest;
                toProto(message: _53.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _53.QueryVotesRequest): _53.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _53.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryVotesResponse;
                fromJSON(object: any): _53.QueryVotesResponse;
                toJSON(message: _53.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_53.QueryVotesResponse>): _53.QueryVotesResponse;
                fromAmino(object: _53.QueryVotesResponseAmino): _53.QueryVotesResponse;
                toAmino(message: _53.QueryVotesResponse): _53.QueryVotesResponseAmino;
                fromAminoMsg(object: _53.QueryVotesResponseAminoMsg): _53.QueryVotesResponse;
                toAminoMsg(message: _53.QueryVotesResponse): _53.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _53.QueryVotesResponseProtoMsg): _53.QueryVotesResponse;
                toProto(message: _53.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _53.QueryVotesResponse): _53.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromJSON(object: any): _53.QueryParamsRequest;
                toJSON(message: _53.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
                fromAmino(object: _53.QueryParamsRequestAmino): _53.QueryParamsRequest;
                toAmino(message: _53.QueryParamsRequest): _53.QueryParamsRequestAmino;
                fromAminoMsg(object: _53.QueryParamsRequestAminoMsg): _53.QueryParamsRequest;
                toAminoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryParamsRequestProtoMsg): _53.QueryParamsRequest;
                toProto(message: _53.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryParamsRequest): _53.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
                fromAmino(object: _53.QueryParamsResponseAmino): _53.QueryParamsResponse;
                toAmino(message: _53.QueryParamsResponse): _53.QueryParamsResponseAmino;
                fromAminoMsg(object: _53.QueryParamsResponseAminoMsg): _53.QueryParamsResponse;
                toAminoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryParamsResponseProtoMsg): _53.QueryParamsResponse;
                toProto(message: _53.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryParamsResponse): _53.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _53.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositRequest;
                fromJSON(object: any): _53.QueryDepositRequest;
                toJSON(message: _53.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_53.QueryDepositRequest>): _53.QueryDepositRequest;
                fromAmino(object: _53.QueryDepositRequestAmino): _53.QueryDepositRequest;
                toAmino(message: _53.QueryDepositRequest): _53.QueryDepositRequestAmino;
                fromAminoMsg(object: _53.QueryDepositRequestAminoMsg): _53.QueryDepositRequest;
                toAminoMsg(message: _53.QueryDepositRequest): _53.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _53.QueryDepositRequestProtoMsg): _53.QueryDepositRequest;
                toProto(message: _53.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _53.QueryDepositRequest): _53.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _53.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositResponse;
                fromJSON(object: any): _53.QueryDepositResponse;
                toJSON(message: _53.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_53.QueryDepositResponse>): _53.QueryDepositResponse;
                fromAmino(object: _53.QueryDepositResponseAmino): _53.QueryDepositResponse;
                toAmino(message: _53.QueryDepositResponse): _53.QueryDepositResponseAmino;
                fromAminoMsg(object: _53.QueryDepositResponseAminoMsg): _53.QueryDepositResponse;
                toAminoMsg(message: _53.QueryDepositResponse): _53.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _53.QueryDepositResponseProtoMsg): _53.QueryDepositResponse;
                toProto(message: _53.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _53.QueryDepositResponse): _53.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _53.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsRequest;
                fromJSON(object: any): _53.QueryDepositsRequest;
                toJSON(message: _53.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_53.QueryDepositsRequest>): _53.QueryDepositsRequest;
                fromAmino(object: _53.QueryDepositsRequestAmino): _53.QueryDepositsRequest;
                toAmino(message: _53.QueryDepositsRequest): _53.QueryDepositsRequestAmino;
                fromAminoMsg(object: _53.QueryDepositsRequestAminoMsg): _53.QueryDepositsRequest;
                toAminoMsg(message: _53.QueryDepositsRequest): _53.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _53.QueryDepositsRequestProtoMsg): _53.QueryDepositsRequest;
                toProto(message: _53.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _53.QueryDepositsRequest): _53.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _53.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryDepositsResponse;
                fromJSON(object: any): _53.QueryDepositsResponse;
                toJSON(message: _53.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_53.QueryDepositsResponse>): _53.QueryDepositsResponse;
                fromAmino(object: _53.QueryDepositsResponseAmino): _53.QueryDepositsResponse;
                toAmino(message: _53.QueryDepositsResponse): _53.QueryDepositsResponseAmino;
                fromAminoMsg(object: _53.QueryDepositsResponseAminoMsg): _53.QueryDepositsResponse;
                toAminoMsg(message: _53.QueryDepositsResponse): _53.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _53.QueryDepositsResponseProtoMsg): _53.QueryDepositsResponse;
                toProto(message: _53.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _53.QueryDepositsResponse): _53.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _53.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultRequest;
                fromJSON(object: any): _53.QueryTallyResultRequest;
                toJSON(message: _53.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_53.QueryTallyResultRequest>): _53.QueryTallyResultRequest;
                fromAmino(object: _53.QueryTallyResultRequestAmino): _53.QueryTallyResultRequest;
                toAmino(message: _53.QueryTallyResultRequest): _53.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _53.QueryTallyResultRequestAminoMsg): _53.QueryTallyResultRequest;
                toAminoMsg(message: _53.QueryTallyResultRequest): _53.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _53.QueryTallyResultRequestProtoMsg): _53.QueryTallyResultRequest;
                toProto(message: _53.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _53.QueryTallyResultRequest): _53.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _53.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryTallyResultResponse;
                fromJSON(object: any): _53.QueryTallyResultResponse;
                toJSON(message: _53.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_53.QueryTallyResultResponse>): _53.QueryTallyResultResponse;
                fromAmino(object: _53.QueryTallyResultResponseAmino): _53.QueryTallyResultResponse;
                toAmino(message: _53.QueryTallyResultResponse): _53.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _53.QueryTallyResultResponseAminoMsg): _53.QueryTallyResultResponse;
                toAminoMsg(message: _53.QueryTallyResultResponse): _53.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _53.QueryTallyResultResponseProtoMsg): _53.QueryTallyResultResponse;
                toProto(message: _53.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _53.QueryTallyResultResponse): _53.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _52.VoteOption;
            voteOptionToJSON(object: _52.VoteOption): string;
            proposalStatusFromJSON(object: any): _52.ProposalStatus;
            proposalStatusToJSON(object: _52.ProposalStatus): string;
            VoteOption: typeof _52.VoteOption;
            VoteOptionSDKType: typeof _52.VoteOption;
            VoteOptionAmino: typeof _52.VoteOption;
            ProposalStatus: typeof _52.ProposalStatus;
            ProposalStatusSDKType: typeof _52.ProposalStatus;
            ProposalStatusAmino: typeof _52.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _52.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.WeightedVoteOption;
                fromJSON(object: any): _52.WeightedVoteOption;
                toJSON(message: _52.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_52.WeightedVoteOption>): _52.WeightedVoteOption;
                fromAmino(object: _52.WeightedVoteOptionAmino): _52.WeightedVoteOption;
                toAmino(message: _52.WeightedVoteOption): _52.WeightedVoteOptionAmino;
                fromAminoMsg(object: _52.WeightedVoteOptionAminoMsg): _52.WeightedVoteOption;
                toAminoMsg(message: _52.WeightedVoteOption): _52.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _52.WeightedVoteOptionProtoMsg): _52.WeightedVoteOption;
                toProto(message: _52.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _52.WeightedVoteOption): _52.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _52.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Deposit;
                fromJSON(object: any): _52.Deposit;
                toJSON(message: _52.Deposit): unknown;
                fromPartial(object: Partial<_52.Deposit>): _52.Deposit;
                fromAmino(object: _52.DepositAmino): _52.Deposit;
                toAmino(message: _52.Deposit): _52.DepositAmino;
                fromAminoMsg(object: _52.DepositAminoMsg): _52.Deposit;
                toAminoMsg(message: _52.Deposit): _52.DepositAminoMsg;
                fromProtoMsg(message: _52.DepositProtoMsg): _52.Deposit;
                toProto(message: _52.Deposit): Uint8Array;
                toProtoMsg(message: _52.Deposit): _52.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _52.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Proposal;
                fromJSON(object: any): _52.Proposal;
                toJSON(message: _52.Proposal): unknown;
                fromPartial(object: Partial<_52.Proposal>): _52.Proposal;
                fromAmino(object: _52.ProposalAmino): _52.Proposal;
                toAmino(message: _52.Proposal): _52.ProposalAmino;
                fromAminoMsg(object: _52.ProposalAminoMsg): _52.Proposal;
                toAminoMsg(message: _52.Proposal): _52.ProposalAminoMsg;
                fromProtoMsg(message: _52.ProposalProtoMsg): _52.Proposal;
                toProto(message: _52.Proposal): Uint8Array;
                toProtoMsg(message: _52.Proposal): _52.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _52.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyResult;
                fromJSON(object: any): _52.TallyResult;
                toJSON(message: _52.TallyResult): unknown;
                fromPartial(object: Partial<_52.TallyResult>): _52.TallyResult;
                fromAmino(object: _52.TallyResultAmino): _52.TallyResult;
                toAmino(message: _52.TallyResult): _52.TallyResultAmino;
                fromAminoMsg(object: _52.TallyResultAminoMsg): _52.TallyResult;
                toAminoMsg(message: _52.TallyResult): _52.TallyResultAminoMsg;
                fromProtoMsg(message: _52.TallyResultProtoMsg): _52.TallyResult;
                toProto(message: _52.TallyResult): Uint8Array;
                toProtoMsg(message: _52.TallyResult): _52.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _52.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Vote;
                fromJSON(object: any): _52.Vote;
                toJSON(message: _52.Vote): unknown;
                fromPartial(object: Partial<_52.Vote>): _52.Vote;
                fromAmino(object: _52.VoteAmino): _52.Vote;
                toAmino(message: _52.Vote): _52.VoteAmino;
                fromAminoMsg(object: _52.VoteAminoMsg): _52.Vote;
                toAminoMsg(message: _52.Vote): _52.VoteAminoMsg;
                fromProtoMsg(message: _52.VoteProtoMsg): _52.Vote;
                toProto(message: _52.Vote): Uint8Array;
                toProtoMsg(message: _52.Vote): _52.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _52.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DepositParams;
                fromJSON(object: any): _52.DepositParams;
                toJSON(message: _52.DepositParams): unknown;
                fromPartial(object: Partial<_52.DepositParams>): _52.DepositParams;
                fromAmino(object: _52.DepositParamsAmino): _52.DepositParams;
                toAmino(message: _52.DepositParams): _52.DepositParamsAmino;
                fromAminoMsg(object: _52.DepositParamsAminoMsg): _52.DepositParams;
                toAminoMsg(message: _52.DepositParams): _52.DepositParamsAminoMsg;
                fromProtoMsg(message: _52.DepositParamsProtoMsg): _52.DepositParams;
                toProto(message: _52.DepositParams): Uint8Array;
                toProtoMsg(message: _52.DepositParams): _52.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _52.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.VotingParams;
                fromJSON(object: any): _52.VotingParams;
                toJSON(message: _52.VotingParams): unknown;
                fromPartial(object: Partial<_52.VotingParams>): _52.VotingParams;
                fromAmino(object: _52.VotingParamsAmino): _52.VotingParams;
                toAmino(message: _52.VotingParams): _52.VotingParamsAmino;
                fromAminoMsg(object: _52.VotingParamsAminoMsg): _52.VotingParams;
                toAminoMsg(message: _52.VotingParams): _52.VotingParamsAminoMsg;
                fromProtoMsg(message: _52.VotingParamsProtoMsg): _52.VotingParams;
                toProto(message: _52.VotingParams): Uint8Array;
                toProtoMsg(message: _52.VotingParams): _52.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _52.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.TallyParams;
                fromJSON(object: any): _52.TallyParams;
                toJSON(message: _52.TallyParams): unknown;
                fromPartial(object: Partial<_52.TallyParams>): _52.TallyParams;
                fromAmino(object: _52.TallyParamsAmino): _52.TallyParams;
                toAmino(message: _52.TallyParams): _52.TallyParamsAmino;
                fromAminoMsg(object: _52.TallyParamsAminoMsg): _52.TallyParams;
                toAminoMsg(message: _52.TallyParams): _52.TallyParamsAminoMsg;
                fromProtoMsg(message: _52.TallyParamsProtoMsg): _52.TallyParams;
                toProto(message: _52.TallyParams): Uint8Array;
                toProtoMsg(message: _52.TallyParams): _52.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _58.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _58.MsgSubmitProposal;
                    };
                    vote(value: _58.MsgVote): {
                        typeUrl: string;
                        value: _58.MsgVote;
                    };
                    voteWeighted(value: _58.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _58.MsgVoteWeighted;
                    };
                    deposit(value: _58.MsgDeposit): {
                        typeUrl: string;
                        value: _58.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _58.MsgSubmitProposal) => _58.MsgSubmitProposalAmino;
                    fromAmino: (object: _58.MsgSubmitProposalAmino) => _58.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVote) => _58.MsgVoteAmino;
                    fromAmino: (object: _58.MsgVoteAmino) => _58.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _58.MsgVoteWeighted) => _58.MsgVoteWeightedAmino;
                    fromAmino: (object: _58.MsgVoteWeightedAmino) => _58.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _58.MsgDeposit) => _58.MsgDepositAmino;
                    fromAmino: (object: _58.MsgDepositAmino) => _58.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _58.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposal;
                fromJSON(object: any): _58.MsgSubmitProposal;
                toJSON(message: _58.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposal>): _58.MsgSubmitProposal;
                fromAmino(object: _58.MsgSubmitProposalAmino): _58.MsgSubmitProposal;
                toAmino(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalAminoMsg): _58.MsgSubmitProposal;
                toAminoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalProtoMsg): _58.MsgSubmitProposal;
                toProto(message: _58.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposal): _58.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _58.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitProposalResponse;
                fromJSON(object: any): _58.MsgSubmitProposalResponse;
                toJSON(message: _58.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_58.MsgSubmitProposalResponse>): _58.MsgSubmitProposalResponse;
                fromAmino(object: _58.MsgSubmitProposalResponseAmino): _58.MsgSubmitProposalResponse;
                toAmino(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _58.MsgSubmitProposalResponseAminoMsg): _58.MsgSubmitProposalResponse;
                toAminoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _58.MsgSubmitProposalResponseProtoMsg): _58.MsgSubmitProposalResponse;
                toProto(message: _58.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _58.MsgSubmitProposalResponse): _58.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _58.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVote;
                fromJSON(object: any): _58.MsgVote;
                toJSON(message: _58.MsgVote): unknown;
                fromPartial(object: Partial<_58.MsgVote>): _58.MsgVote;
                fromAmino(object: _58.MsgVoteAmino): _58.MsgVote;
                toAmino(message: _58.MsgVote): _58.MsgVoteAmino;
                fromAminoMsg(object: _58.MsgVoteAminoMsg): _58.MsgVote;
                toAminoMsg(message: _58.MsgVote): _58.MsgVoteAminoMsg;
                fromProtoMsg(message: _58.MsgVoteProtoMsg): _58.MsgVote;
                toProto(message: _58.MsgVote): Uint8Array;
                toProtoMsg(message: _58.MsgVote): _58.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _58.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteResponse;
                fromJSON(_: any): _58.MsgVoteResponse;
                toJSON(_: _58.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteResponse>): _58.MsgVoteResponse;
                fromAmino(_: _58.MsgVoteResponseAmino): _58.MsgVoteResponse;
                toAmino(_: _58.MsgVoteResponse): _58.MsgVoteResponseAmino;
                fromAminoMsg(object: _58.MsgVoteResponseAminoMsg): _58.MsgVoteResponse;
                toAminoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteResponseProtoMsg): _58.MsgVoteResponse;
                toProto(message: _58.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteResponse): _58.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _58.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeighted;
                fromJSON(object: any): _58.MsgVoteWeighted;
                toJSON(message: _58.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_58.MsgVoteWeighted>): _58.MsgVoteWeighted;
                fromAmino(object: _58.MsgVoteWeightedAmino): _58.MsgVoteWeighted;
                toAmino(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedAminoMsg): _58.MsgVoteWeighted;
                toAminoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedProtoMsg): _58.MsgVoteWeighted;
                toProto(message: _58.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeighted): _58.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _58.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgVoteWeightedResponse;
                fromJSON(_: any): _58.MsgVoteWeightedResponse;
                toJSON(_: _58.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_58.MsgVoteWeightedResponse>): _58.MsgVoteWeightedResponse;
                fromAmino(_: _58.MsgVoteWeightedResponseAmino): _58.MsgVoteWeightedResponse;
                toAmino(_: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _58.MsgVoteWeightedResponseAminoMsg): _58.MsgVoteWeightedResponse;
                toAminoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _58.MsgVoteWeightedResponseProtoMsg): _58.MsgVoteWeightedResponse;
                toProto(message: _58.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _58.MsgVoteWeightedResponse): _58.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _58.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDeposit;
                fromJSON(object: any): _58.MsgDeposit;
                toJSON(message: _58.MsgDeposit): unknown;
                fromPartial(object: Partial<_58.MsgDeposit>): _58.MsgDeposit;
                fromAmino(object: _58.MsgDepositAmino): _58.MsgDeposit;
                toAmino(message: _58.MsgDeposit): _58.MsgDepositAmino;
                fromAminoMsg(object: _58.MsgDepositAminoMsg): _58.MsgDeposit;
                toAminoMsg(message: _58.MsgDeposit): _58.MsgDepositAminoMsg;
                fromProtoMsg(message: _58.MsgDepositProtoMsg): _58.MsgDeposit;
                toProto(message: _58.MsgDeposit): Uint8Array;
                toProtoMsg(message: _58.MsgDeposit): _58.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _58.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDepositResponse;
                fromJSON(_: any): _58.MsgDepositResponse;
                toJSON(_: _58.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_58.MsgDepositResponse>): _58.MsgDepositResponse;
                fromAmino(_: _58.MsgDepositResponseAmino): _58.MsgDepositResponse;
                toAmino(_: _58.MsgDepositResponse): _58.MsgDepositResponseAmino;
                fromAminoMsg(object: _58.MsgDepositResponseAminoMsg): _58.MsgDepositResponse;
                toAminoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _58.MsgDepositResponseProtoMsg): _58.MsgDepositResponse;
                toProto(message: _58.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _58.MsgDepositResponse): _58.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _57.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalRequest;
                fromJSON(object: any): _57.QueryProposalRequest;
                toJSON(message: _57.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalRequest>): _57.QueryProposalRequest;
                fromAmino(object: _57.QueryProposalRequestAmino): _57.QueryProposalRequest;
                toAmino(message: _57.QueryProposalRequest): _57.QueryProposalRequestAmino;
                fromAminoMsg(object: _57.QueryProposalRequestAminoMsg): _57.QueryProposalRequest;
                toAminoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalRequestProtoMsg): _57.QueryProposalRequest;
                toProto(message: _57.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalRequest): _57.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _57.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalResponse;
                fromJSON(object: any): _57.QueryProposalResponse;
                toJSON(message: _57.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalResponse>): _57.QueryProposalResponse;
                fromAmino(object: _57.QueryProposalResponseAmino): _57.QueryProposalResponse;
                toAmino(message: _57.QueryProposalResponse): _57.QueryProposalResponseAmino;
                fromAminoMsg(object: _57.QueryProposalResponseAminoMsg): _57.QueryProposalResponse;
                toAminoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalResponseProtoMsg): _57.QueryProposalResponse;
                toProto(message: _57.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalResponse): _57.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _57.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsRequest;
                fromJSON(object: any): _57.QueryProposalsRequest;
                toJSON(message: _57.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_57.QueryProposalsRequest>): _57.QueryProposalsRequest;
                fromAmino(object: _57.QueryProposalsRequestAmino): _57.QueryProposalsRequest;
                toAmino(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAmino;
                fromAminoMsg(object: _57.QueryProposalsRequestAminoMsg): _57.QueryProposalsRequest;
                toAminoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsRequestProtoMsg): _57.QueryProposalsRequest;
                toProto(message: _57.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsRequest): _57.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _57.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryProposalsResponse;
                fromJSON(object: any): _57.QueryProposalsResponse;
                toJSON(message: _57.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_57.QueryProposalsResponse>): _57.QueryProposalsResponse;
                fromAmino(object: _57.QueryProposalsResponseAmino): _57.QueryProposalsResponse;
                toAmino(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAmino;
                fromAminoMsg(object: _57.QueryProposalsResponseAminoMsg): _57.QueryProposalsResponse;
                toAminoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryProposalsResponseProtoMsg): _57.QueryProposalsResponse;
                toProto(message: _57.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryProposalsResponse): _57.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _57.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteRequest;
                fromJSON(object: any): _57.QueryVoteRequest;
                toJSON(message: _57.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_57.QueryVoteRequest>): _57.QueryVoteRequest;
                fromAmino(object: _57.QueryVoteRequestAmino): _57.QueryVoteRequest;
                toAmino(message: _57.QueryVoteRequest): _57.QueryVoteRequestAmino;
                fromAminoMsg(object: _57.QueryVoteRequestAminoMsg): _57.QueryVoteRequest;
                toAminoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVoteRequestProtoMsg): _57.QueryVoteRequest;
                toProto(message: _57.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVoteRequest): _57.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _57.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVoteResponse;
                fromJSON(object: any): _57.QueryVoteResponse;
                toJSON(message: _57.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_57.QueryVoteResponse>): _57.QueryVoteResponse;
                fromAmino(object: _57.QueryVoteResponseAmino): _57.QueryVoteResponse;
                toAmino(message: _57.QueryVoteResponse): _57.QueryVoteResponseAmino;
                fromAminoMsg(object: _57.QueryVoteResponseAminoMsg): _57.QueryVoteResponse;
                toAminoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVoteResponseProtoMsg): _57.QueryVoteResponse;
                toProto(message: _57.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVoteResponse): _57.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _57.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesRequest;
                fromJSON(object: any): _57.QueryVotesRequest;
                toJSON(message: _57.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_57.QueryVotesRequest>): _57.QueryVotesRequest;
                fromAmino(object: _57.QueryVotesRequestAmino): _57.QueryVotesRequest;
                toAmino(message: _57.QueryVotesRequest): _57.QueryVotesRequestAmino;
                fromAminoMsg(object: _57.QueryVotesRequestAminoMsg): _57.QueryVotesRequest;
                toAminoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _57.QueryVotesRequestProtoMsg): _57.QueryVotesRequest;
                toProto(message: _57.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _57.QueryVotesRequest): _57.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _57.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryVotesResponse;
                fromJSON(object: any): _57.QueryVotesResponse;
                toJSON(message: _57.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_57.QueryVotesResponse>): _57.QueryVotesResponse;
                fromAmino(object: _57.QueryVotesResponseAmino): _57.QueryVotesResponse;
                toAmino(message: _57.QueryVotesResponse): _57.QueryVotesResponseAmino;
                fromAminoMsg(object: _57.QueryVotesResponseAminoMsg): _57.QueryVotesResponse;
                toAminoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _57.QueryVotesResponseProtoMsg): _57.QueryVotesResponse;
                toProto(message: _57.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _57.QueryVotesResponse): _57.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(object: any): _57.QueryParamsRequest;
                toJSON(message: _57.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(object: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(message: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                toAminoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                toAminoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _57.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositRequest;
                fromJSON(object: any): _57.QueryDepositRequest;
                toJSON(message: _57.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositRequest>): _57.QueryDepositRequest;
                fromAmino(object: _57.QueryDepositRequestAmino): _57.QueryDepositRequest;
                toAmino(message: _57.QueryDepositRequest): _57.QueryDepositRequestAmino;
                fromAminoMsg(object: _57.QueryDepositRequestAminoMsg): _57.QueryDepositRequest;
                toAminoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositRequestProtoMsg): _57.QueryDepositRequest;
                toProto(message: _57.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositRequest): _57.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _57.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositResponse;
                fromJSON(object: any): _57.QueryDepositResponse;
                toJSON(message: _57.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositResponse>): _57.QueryDepositResponse;
                fromAmino(object: _57.QueryDepositResponseAmino): _57.QueryDepositResponse;
                toAmino(message: _57.QueryDepositResponse): _57.QueryDepositResponseAmino;
                fromAminoMsg(object: _57.QueryDepositResponseAminoMsg): _57.QueryDepositResponse;
                toAminoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositResponseProtoMsg): _57.QueryDepositResponse;
                toProto(message: _57.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositResponse): _57.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _57.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsRequest;
                fromJSON(object: any): _57.QueryDepositsRequest;
                toJSON(message: _57.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_57.QueryDepositsRequest>): _57.QueryDepositsRequest;
                fromAmino(object: _57.QueryDepositsRequestAmino): _57.QueryDepositsRequest;
                toAmino(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAmino;
                fromAminoMsg(object: _57.QueryDepositsRequestAminoMsg): _57.QueryDepositsRequest;
                toAminoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsRequestProtoMsg): _57.QueryDepositsRequest;
                toProto(message: _57.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsRequest): _57.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _57.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDepositsResponse;
                fromJSON(object: any): _57.QueryDepositsResponse;
                toJSON(message: _57.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_57.QueryDepositsResponse>): _57.QueryDepositsResponse;
                fromAmino(object: _57.QueryDepositsResponseAmino): _57.QueryDepositsResponse;
                toAmino(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAmino;
                fromAminoMsg(object: _57.QueryDepositsResponseAminoMsg): _57.QueryDepositsResponse;
                toAminoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _57.QueryDepositsResponseProtoMsg): _57.QueryDepositsResponse;
                toProto(message: _57.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryDepositsResponse): _57.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _57.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultRequest;
                fromJSON(object: any): _57.QueryTallyResultRequest;
                toJSON(message: _57.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultRequest>): _57.QueryTallyResultRequest;
                fromAmino(object: _57.QueryTallyResultRequestAmino): _57.QueryTallyResultRequest;
                toAmino(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _57.QueryTallyResultRequestAminoMsg): _57.QueryTallyResultRequest;
                toAminoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultRequestProtoMsg): _57.QueryTallyResultRequest;
                toProto(message: _57.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultRequest): _57.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _57.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryTallyResultResponse;
                fromJSON(object: any): _57.QueryTallyResultResponse;
                toJSON(message: _57.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_57.QueryTallyResultResponse>): _57.QueryTallyResultResponse;
                fromAmino(object: _57.QueryTallyResultResponseAmino): _57.QueryTallyResultResponse;
                toAmino(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _57.QueryTallyResultResponseAminoMsg): _57.QueryTallyResultResponse;
                toAminoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _57.QueryTallyResultResponseProtoMsg): _57.QueryTallyResultResponse;
                toProto(message: _57.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _57.QueryTallyResultResponse): _57.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _56.VoteOption;
            voteOptionToJSON(object: _56.VoteOption): string;
            proposalStatusFromJSON(object: any): _56.ProposalStatus;
            proposalStatusToJSON(object: _56.ProposalStatus): string;
            VoteOption: typeof _56.VoteOption;
            VoteOptionSDKType: typeof _56.VoteOption;
            VoteOptionAmino: typeof _56.VoteOption;
            ProposalStatus: typeof _56.ProposalStatus;
            ProposalStatusSDKType: typeof _56.ProposalStatus;
            ProposalStatusAmino: typeof _56.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _56.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.WeightedVoteOption;
                fromJSON(object: any): _56.WeightedVoteOption;
                toJSON(message: _56.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_56.WeightedVoteOption>): _56.WeightedVoteOption;
                fromAmino(object: _56.WeightedVoteOptionAmino): _56.WeightedVoteOption;
                toAmino(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAmino;
                fromAminoMsg(object: _56.WeightedVoteOptionAminoMsg): _56.WeightedVoteOption;
                toAminoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _56.WeightedVoteOptionProtoMsg): _56.WeightedVoteOption;
                toProto(message: _56.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _56.WeightedVoteOption): _56.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _56.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TextProposal;
                fromJSON(object: any): _56.TextProposal;
                toJSON(message: _56.TextProposal): unknown;
                fromPartial(object: Partial<_56.TextProposal>): _56.TextProposal;
                fromAmino(object: _56.TextProposalAmino): _56.TextProposal;
                toAmino(message: _56.TextProposal): _56.TextProposalAmino;
                fromAminoMsg(object: _56.TextProposalAminoMsg): _56.TextProposal;
                toAminoMsg(message: _56.TextProposal): _56.TextProposalAminoMsg;
                fromProtoMsg(message: _56.TextProposalProtoMsg): _56.TextProposal;
                toProto(message: _56.TextProposal): Uint8Array;
                toProtoMsg(message: _56.TextProposal): _56.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _56.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Deposit;
                fromJSON(object: any): _56.Deposit;
                toJSON(message: _56.Deposit): unknown;
                fromPartial(object: Partial<_56.Deposit>): _56.Deposit;
                fromAmino(object: _56.DepositAmino): _56.Deposit;
                toAmino(message: _56.Deposit): _56.DepositAmino;
                fromAminoMsg(object: _56.DepositAminoMsg): _56.Deposit;
                toAminoMsg(message: _56.Deposit): _56.DepositAminoMsg;
                fromProtoMsg(message: _56.DepositProtoMsg): _56.Deposit;
                toProto(message: _56.Deposit): Uint8Array;
                toProtoMsg(message: _56.Deposit): _56.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
                fromJSON(object: any): _56.Proposal;
                toJSON(message: _56.Proposal): unknown;
                fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
                fromAmino(object: _56.ProposalAmino): _56.Proposal;
                toAmino(message: _56.Proposal): _56.ProposalAmino;
                fromAminoMsg(object: _56.ProposalAminoMsg): _56.Proposal;
                toAminoMsg(message: _56.Proposal): _56.ProposalAminoMsg;
                fromProtoMsg(message: _56.ProposalProtoMsg): _56.Proposal;
                toProto(message: _56.Proposal): Uint8Array;
                toProtoMsg(message: _56.Proposal): _56.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _56.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyResult;
                fromJSON(object: any): _56.TallyResult;
                toJSON(message: _56.TallyResult): unknown;
                fromPartial(object: Partial<_56.TallyResult>): _56.TallyResult;
                fromAmino(object: _56.TallyResultAmino): _56.TallyResult;
                toAmino(message: _56.TallyResult): _56.TallyResultAmino;
                fromAminoMsg(object: _56.TallyResultAminoMsg): _56.TallyResult;
                toAminoMsg(message: _56.TallyResult): _56.TallyResultAminoMsg;
                fromProtoMsg(message: _56.TallyResultProtoMsg): _56.TallyResult;
                toProto(message: _56.TallyResult): Uint8Array;
                toProtoMsg(message: _56.TallyResult): _56.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
                fromJSON(object: any): _56.Vote;
                toJSON(message: _56.Vote): unknown;
                fromPartial(object: Partial<_56.Vote>): _56.Vote;
                fromAmino(object: _56.VoteAmino): _56.Vote;
                toAmino(message: _56.Vote): _56.VoteAmino;
                fromAminoMsg(object: _56.VoteAminoMsg): _56.Vote;
                toAminoMsg(message: _56.Vote): _56.VoteAminoMsg;
                fromProtoMsg(message: _56.VoteProtoMsg): _56.Vote;
                toProto(message: _56.Vote): Uint8Array;
                toProtoMsg(message: _56.Vote): _56.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _56.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.DepositParams;
                fromJSON(object: any): _56.DepositParams;
                toJSON(message: _56.DepositParams): unknown;
                fromPartial(object: Partial<_56.DepositParams>): _56.DepositParams;
                fromAmino(object: _56.DepositParamsAmino): _56.DepositParams;
                toAmino(message: _56.DepositParams): _56.DepositParamsAmino;
                fromAminoMsg(object: _56.DepositParamsAminoMsg): _56.DepositParams;
                toAminoMsg(message: _56.DepositParams): _56.DepositParamsAminoMsg;
                fromProtoMsg(message: _56.DepositParamsProtoMsg): _56.DepositParams;
                toProto(message: _56.DepositParams): Uint8Array;
                toProtoMsg(message: _56.DepositParams): _56.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _56.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.VotingParams;
                fromJSON(object: any): _56.VotingParams;
                toJSON(message: _56.VotingParams): unknown;
                fromPartial(object: Partial<_56.VotingParams>): _56.VotingParams;
                fromAmino(object: _56.VotingParamsAmino): _56.VotingParams;
                toAmino(message: _56.VotingParams): _56.VotingParamsAmino;
                fromAminoMsg(object: _56.VotingParamsAminoMsg): _56.VotingParams;
                toAminoMsg(message: _56.VotingParams): _56.VotingParamsAminoMsg;
                fromProtoMsg(message: _56.VotingParamsProtoMsg): _56.VotingParams;
                toProto(message: _56.VotingParams): Uint8Array;
                toProtoMsg(message: _56.VotingParams): _56.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _56.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TallyParams;
                fromJSON(object: any): _56.TallyParams;
                toJSON(message: _56.TallyParams): unknown;
                fromPartial(object: Partial<_56.TallyParams>): _56.TallyParams;
                fromAmino(object: _56.TallyParamsAmino): _56.TallyParams;
                toAmino(message: _56.TallyParams): _56.TallyParamsAmino;
                fromAminoMsg(object: _56.TallyParamsAminoMsg): _56.TallyParams;
                toAminoMsg(message: _56.TallyParams): _56.TallyParamsAminoMsg;
                fromProtoMsg(message: _56.TallyParamsProtoMsg): _56.TallyParams;
                toProto(message: _56.TallyParams): Uint8Array;
                toProtoMsg(message: _56.TallyParams): _56.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _61.QueryGroupInfoRequest): Promise<_61.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _61.QueryGroupPolicyInfoRequest): Promise<_61.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _61.QueryGroupMembersRequest): Promise<_61.QueryGroupMembersResponse>;
                groupsByAdmin(request: _61.QueryGroupsByAdminRequest): Promise<_61.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _61.QueryGroupPoliciesByGroupRequest): Promise<_61.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _61.QueryGroupPoliciesByAdminRequest): Promise<_61.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _61.QueryProposalsByGroupPolicyRequest): Promise<_61.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _61.QueryVoteByProposalVoterRequest): Promise<_61.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _61.QueryVotesByProposalRequest): Promise<_61.QueryVotesByProposalResponse>;
                votesByVoter(request: _61.QueryVotesByVoterRequest): Promise<_61.QueryVotesByVoterResponse>;
                groupsByMember(request: _61.QueryGroupsByMemberRequest): Promise<_61.QueryGroupsByMemberResponse>;
                tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: _62.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _62.MsgWithdrawProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: _62.MsgExec;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _62.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _62.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _62.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _62.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _62.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _62.MsgCreateGroup): {
                        typeUrl: string;
                        value: _62.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _62.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _62.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _62.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _62.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _62.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _62.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _62.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _62.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _62.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _62.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _62.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _62.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _62.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _62.MsgWithdrawProposal;
                    };
                    vote(value: _62.MsgVote): {
                        typeUrl: string;
                        value: _62.MsgVote;
                    };
                    exec(value: _62.MsgExec): {
                        typeUrl: string;
                        value: _62.MsgExec;
                    };
                    leaveGroup(value: _62.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _62.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _62.MsgCreateGroup) => _62.MsgCreateGroupAmino;
                    fromAmino: (object: _62.MsgCreateGroupAmino) => _62.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupMembers) => _62.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _62.MsgUpdateGroupMembersAmino) => _62.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupAdmin) => _62.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _62.MsgUpdateGroupAdminAmino) => _62.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupMetadata) => _62.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _62.MsgUpdateGroupMetadataAmino) => _62.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _62.MsgCreateGroupPolicy) => _62.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _62.MsgCreateGroupPolicyAmino) => _62.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _62.MsgCreateGroupWithPolicy) => _62.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _62.MsgCreateGroupWithPolicyAmino) => _62.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupPolicyAdmin) => _62.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _62.MsgUpdateGroupPolicyAdminAmino) => _62.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupPolicyDecisionPolicy) => _62.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _62.MsgUpdateGroupPolicyDecisionPolicyAmino) => _62.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _62.MsgUpdateGroupPolicyMetadata) => _62.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _62.MsgUpdateGroupPolicyMetadataAmino) => _62.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgSubmitProposal) => _62.MsgSubmitProposalAmino;
                    fromAmino: (object: _62.MsgSubmitProposalAmino) => _62.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _62.MsgWithdrawProposal) => _62.MsgWithdrawProposalAmino;
                    fromAmino: (object: _62.MsgWithdrawProposalAmino) => _62.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _62.MsgVote) => _62.MsgVoteAmino;
                    fromAmino: (object: _62.MsgVoteAmino) => _62.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _62.MsgExec) => _62.MsgExecAmino;
                    fromAmino: (object: _62.MsgExecAmino) => _62.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _62.MsgLeaveGroup) => _62.MsgLeaveGroupAmino;
                    fromAmino: (object: _62.MsgLeaveGroupAmino) => _62.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            proposalResultFromJSON(object: any): _63.ProposalResult;
            proposalResultToJSON(object: _63.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _63.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _63.ProposalExecutorResult): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOption;
            VoteOptionAmino: typeof _63.VoteOption;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatus;
            ProposalStatusAmino: typeof _63.ProposalStatus;
            ProposalResult: typeof _63.ProposalResult;
            ProposalResultSDKType: typeof _63.ProposalResult;
            ProposalResultAmino: typeof _63.ProposalResult;
            ProposalExecutorResult: typeof _63.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _63.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _63.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _63.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Member;
                fromJSON(object: any): _63.Member;
                toJSON(message: _63.Member): unknown;
                fromPartial(object: Partial<_63.Member>): _63.Member;
                fromAmino(object: _63.MemberAmino): _63.Member;
                toAmino(message: _63.Member): _63.MemberAmino;
                fromAminoMsg(object: _63.MemberAminoMsg): _63.Member;
                toAminoMsg(message: _63.Member): _63.MemberAminoMsg;
                fromProtoMsg(message: _63.MemberProtoMsg): _63.Member;
                toProto(message: _63.Member): Uint8Array;
                toProtoMsg(message: _63.Member): _63.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _63.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Members;
                fromJSON(object: any): _63.Members;
                toJSON(message: _63.Members): unknown;
                fromPartial(object: Partial<_63.Members>): _63.Members;
                fromAmino(object: _63.MembersAmino): _63.Members;
                toAmino(message: _63.Members): _63.MembersAmino;
                fromAminoMsg(object: _63.MembersAminoMsg): _63.Members;
                toAminoMsg(message: _63.Members): _63.MembersAminoMsg;
                fromProtoMsg(message: _63.MembersProtoMsg): _63.Members;
                toProto(message: _63.Members): Uint8Array;
                toProtoMsg(message: _63.Members): _63.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _63.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ThresholdDecisionPolicy;
                fromJSON(object: any): _63.ThresholdDecisionPolicy;
                toJSON(message: _63.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_63.ThresholdDecisionPolicy>): _63.ThresholdDecisionPolicy;
                fromAmino(object: _63.ThresholdDecisionPolicyAmino): _63.ThresholdDecisionPolicy;
                toAmino(message: _63.ThresholdDecisionPolicy): _63.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _63.ThresholdDecisionPolicyAminoMsg): _63.ThresholdDecisionPolicy;
                toAminoMsg(message: _63.ThresholdDecisionPolicy): _63.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _63.ThresholdDecisionPolicyProtoMsg): _63.ThresholdDecisionPolicy;
                toProto(message: _63.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _63.ThresholdDecisionPolicy): _63.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _63.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.PercentageDecisionPolicy;
                fromJSON(object: any): _63.PercentageDecisionPolicy;
                toJSON(message: _63.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_63.PercentageDecisionPolicy>): _63.PercentageDecisionPolicy;
                fromAmino(object: _63.PercentageDecisionPolicyAmino): _63.PercentageDecisionPolicy;
                toAmino(message: _63.PercentageDecisionPolicy): _63.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _63.PercentageDecisionPolicyAminoMsg): _63.PercentageDecisionPolicy;
                toAminoMsg(message: _63.PercentageDecisionPolicy): _63.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _63.PercentageDecisionPolicyProtoMsg): _63.PercentageDecisionPolicy;
                toProto(message: _63.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _63.PercentageDecisionPolicy): _63.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _63.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DecisionPolicyWindows;
                fromJSON(object: any): _63.DecisionPolicyWindows;
                toJSON(message: _63.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_63.DecisionPolicyWindows>): _63.DecisionPolicyWindows;
                fromAmino(object: _63.DecisionPolicyWindowsAmino): _63.DecisionPolicyWindows;
                toAmino(message: _63.DecisionPolicyWindows): _63.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _63.DecisionPolicyWindowsAminoMsg): _63.DecisionPolicyWindows;
                toAminoMsg(message: _63.DecisionPolicyWindows): _63.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _63.DecisionPolicyWindowsProtoMsg): _63.DecisionPolicyWindows;
                toProto(message: _63.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _63.DecisionPolicyWindows): _63.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _63.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupInfo;
                fromJSON(object: any): _63.GroupInfo;
                toJSON(message: _63.GroupInfo): unknown;
                fromPartial(object: Partial<_63.GroupInfo>): _63.GroupInfo;
                fromAmino(object: _63.GroupInfoAmino): _63.GroupInfo;
                toAmino(message: _63.GroupInfo): _63.GroupInfoAmino;
                fromAminoMsg(object: _63.GroupInfoAminoMsg): _63.GroupInfo;
                toAminoMsg(message: _63.GroupInfo): _63.GroupInfoAminoMsg;
                fromProtoMsg(message: _63.GroupInfoProtoMsg): _63.GroupInfo;
                toProto(message: _63.GroupInfo): Uint8Array;
                toProtoMsg(message: _63.GroupInfo): _63.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _63.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupMember;
                fromJSON(object: any): _63.GroupMember;
                toJSON(message: _63.GroupMember): unknown;
                fromPartial(object: Partial<_63.GroupMember>): _63.GroupMember;
                fromAmino(object: _63.GroupMemberAmino): _63.GroupMember;
                toAmino(message: _63.GroupMember): _63.GroupMemberAmino;
                fromAminoMsg(object: _63.GroupMemberAminoMsg): _63.GroupMember;
                toAminoMsg(message: _63.GroupMember): _63.GroupMemberAminoMsg;
                fromProtoMsg(message: _63.GroupMemberProtoMsg): _63.GroupMember;
                toProto(message: _63.GroupMember): Uint8Array;
                toProtoMsg(message: _63.GroupMember): _63.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _63.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GroupPolicyInfo;
                fromJSON(object: any): _63.GroupPolicyInfo;
                toJSON(message: _63.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_63.GroupPolicyInfo>): _63.GroupPolicyInfo;
                fromAmino(object: _63.GroupPolicyInfoAmino): _63.GroupPolicyInfo;
                toAmino(message: _63.GroupPolicyInfo): _63.GroupPolicyInfoAmino;
                fromAminoMsg(object: _63.GroupPolicyInfoAminoMsg): _63.GroupPolicyInfo;
                toAminoMsg(message: _63.GroupPolicyInfo): _63.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _63.GroupPolicyInfoProtoMsg): _63.GroupPolicyInfo;
                toProto(message: _63.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _63.GroupPolicyInfo): _63.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _63.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proposal;
                fromJSON(object: any): _63.Proposal;
                toJSON(message: _63.Proposal): unknown;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
                fromAmino(object: _63.ProposalAmino): _63.Proposal;
                toAmino(message: _63.Proposal): _63.ProposalAmino;
                fromAminoMsg(object: _63.ProposalAminoMsg): _63.Proposal;
                toAminoMsg(message: _63.Proposal): _63.ProposalAminoMsg;
                fromProtoMsg(message: _63.ProposalProtoMsg): _63.Proposal;
                toProto(message: _63.Proposal): Uint8Array;
                toProtoMsg(message: _63.Proposal): _63.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _63.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
                fromAmino(object: _63.TallyResultAmino): _63.TallyResult;
                toAmino(message: _63.TallyResult): _63.TallyResultAmino;
                fromAminoMsg(object: _63.TallyResultAminoMsg): _63.TallyResult;
                toAminoMsg(message: _63.TallyResult): _63.TallyResultAminoMsg;
                fromProtoMsg(message: _63.TallyResultProtoMsg): _63.TallyResult;
                toProto(message: _63.TallyResult): Uint8Array;
                toProtoMsg(message: _63.TallyResult): _63.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _63.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Vote;
                fromJSON(object: any): _63.Vote;
                toJSON(message: _63.Vote): unknown;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
                fromAmino(object: _63.VoteAmino): _63.Vote;
                toAmino(message: _63.Vote): _63.VoteAmino;
                fromAminoMsg(object: _63.VoteAminoMsg): _63.Vote;
                toAminoMsg(message: _63.Vote): _63.VoteAminoMsg;
                fromProtoMsg(message: _63.VoteProtoMsg): _63.Vote;
                toProto(message: _63.Vote): Uint8Array;
                toProtoMsg(message: _63.Vote): _63.VoteProtoMsg;
            };
            execFromJSON(object: any): _62.Exec;
            execToJSON(object: _62.Exec): string;
            Exec: typeof _62.Exec;
            ExecSDKType: typeof _62.Exec;
            ExecAmino: typeof _62.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroup;
                fromJSON(object: any): _62.MsgCreateGroup;
                toJSON(message: _62.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroup>): _62.MsgCreateGroup;
                fromAmino(object: _62.MsgCreateGroupAmino): _62.MsgCreateGroup;
                toAmino(message: _62.MsgCreateGroup): _62.MsgCreateGroupAmino;
                fromAminoMsg(object: _62.MsgCreateGroupAminoMsg): _62.MsgCreateGroup;
                toAminoMsg(message: _62.MsgCreateGroup): _62.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupProtoMsg): _62.MsgCreateGroup;
                toProto(message: _62.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroup): _62.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupResponse;
                fromJSON(object: any): _62.MsgCreateGroupResponse;
                toJSON(message: _62.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupResponse>): _62.MsgCreateGroupResponse;
                fromAmino(object: _62.MsgCreateGroupResponseAmino): _62.MsgCreateGroupResponse;
                toAmino(message: _62.MsgCreateGroupResponse): _62.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _62.MsgCreateGroupResponseAminoMsg): _62.MsgCreateGroupResponse;
                toAminoMsg(message: _62.MsgCreateGroupResponse): _62.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupResponseProtoMsg): _62.MsgCreateGroupResponse;
                toProto(message: _62.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroupResponse): _62.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembers;
                fromJSON(object: any): _62.MsgUpdateGroupMembers;
                toJSON(message: _62.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupMembers>): _62.MsgUpdateGroupMembers;
                fromAmino(object: _62.MsgUpdateGroupMembersAmino): _62.MsgUpdateGroupMembers;
                toAmino(message: _62.MsgUpdateGroupMembers): _62.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupMembersAminoMsg): _62.MsgUpdateGroupMembers;
                toAminoMsg(message: _62.MsgUpdateGroupMembers): _62.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupMembersProtoMsg): _62.MsgUpdateGroupMembers;
                toProto(message: _62.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupMembers): _62.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _62.MsgUpdateGroupMembersResponse;
                toJSON(_: _62.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupMembersResponse>): _62.MsgUpdateGroupMembersResponse;
                fromAmino(_: _62.MsgUpdateGroupMembersResponseAmino): _62.MsgUpdateGroupMembersResponse;
                toAmino(_: _62.MsgUpdateGroupMembersResponse): _62.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupMembersResponseAminoMsg): _62.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _62.MsgUpdateGroupMembersResponse): _62.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupMembersResponseProtoMsg): _62.MsgUpdateGroupMembersResponse;
                toProto(message: _62.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupMembersResponse): _62.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdmin;
                fromJSON(object: any): _62.MsgUpdateGroupAdmin;
                toJSON(message: _62.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupAdmin>): _62.MsgUpdateGroupAdmin;
                fromAmino(object: _62.MsgUpdateGroupAdminAmino): _62.MsgUpdateGroupAdmin;
                toAmino(message: _62.MsgUpdateGroupAdmin): _62.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupAdminAminoMsg): _62.MsgUpdateGroupAdmin;
                toAminoMsg(message: _62.MsgUpdateGroupAdmin): _62.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupAdminProtoMsg): _62.MsgUpdateGroupAdmin;
                toProto(message: _62.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupAdmin): _62.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _62.MsgUpdateGroupAdminResponse;
                toJSON(_: _62.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupAdminResponse>): _62.MsgUpdateGroupAdminResponse;
                fromAmino(_: _62.MsgUpdateGroupAdminResponseAmino): _62.MsgUpdateGroupAdminResponse;
                toAmino(_: _62.MsgUpdateGroupAdminResponse): _62.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupAdminResponseAminoMsg): _62.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _62.MsgUpdateGroupAdminResponse): _62.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupAdminResponseProtoMsg): _62.MsgUpdateGroupAdminResponse;
                toProto(message: _62.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupAdminResponse): _62.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadata;
                fromJSON(object: any): _62.MsgUpdateGroupMetadata;
                toJSON(message: _62.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupMetadata>): _62.MsgUpdateGroupMetadata;
                fromAmino(object: _62.MsgUpdateGroupMetadataAmino): _62.MsgUpdateGroupMetadata;
                toAmino(message: _62.MsgUpdateGroupMetadata): _62.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupMetadataAminoMsg): _62.MsgUpdateGroupMetadata;
                toAminoMsg(message: _62.MsgUpdateGroupMetadata): _62.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupMetadataProtoMsg): _62.MsgUpdateGroupMetadata;
                toProto(message: _62.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupMetadata): _62.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _62.MsgUpdateGroupMetadataResponse;
                toJSON(_: _62.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupMetadataResponse>): _62.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _62.MsgUpdateGroupMetadataResponseAmino): _62.MsgUpdateGroupMetadataResponse;
                toAmino(_: _62.MsgUpdateGroupMetadataResponse): _62.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupMetadataResponseAminoMsg): _62.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _62.MsgUpdateGroupMetadataResponse): _62.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupMetadataResponseProtoMsg): _62.MsgUpdateGroupMetadataResponse;
                toProto(message: _62.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupMetadataResponse): _62.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicy;
                fromJSON(object: any): _62.MsgCreateGroupPolicy;
                toJSON(message: _62.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicy>): _62.MsgCreateGroupPolicy;
                fromAmino(object: _62.MsgCreateGroupPolicyAmino): _62.MsgCreateGroupPolicy;
                toAmino(message: _62.MsgCreateGroupPolicy): _62.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _62.MsgCreateGroupPolicyAminoMsg): _62.MsgCreateGroupPolicy;
                toAminoMsg(message: _62.MsgCreateGroupPolicy): _62.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupPolicyProtoMsg): _62.MsgCreateGroupPolicy;
                toProto(message: _62.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroupPolicy): _62.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _62.MsgCreateGroupPolicyResponse;
                toJSON(message: _62.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupPolicyResponse>): _62.MsgCreateGroupPolicyResponse;
                fromAmino(object: _62.MsgCreateGroupPolicyResponseAmino): _62.MsgCreateGroupPolicyResponse;
                toAmino(message: _62.MsgCreateGroupPolicyResponse): _62.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _62.MsgCreateGroupPolicyResponseAminoMsg): _62.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _62.MsgCreateGroupPolicyResponse): _62.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupPolicyResponseProtoMsg): _62.MsgCreateGroupPolicyResponse;
                toProto(message: _62.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroupPolicyResponse): _62.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _62.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyAdmin>): _62.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _62.MsgUpdateGroupPolicyAdminAmino): _62.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _62.MsgUpdateGroupPolicyAdmin): _62.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyAdminAminoMsg): _62.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyAdmin): _62.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyAdminProtoMsg): _62.MsgUpdateGroupPolicyAdmin;
                toProto(message: _62.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyAdmin): _62.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _62.MsgCreateGroupWithPolicy;
                toJSON(message: _62.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicy>): _62.MsgCreateGroupWithPolicy;
                fromAmino(object: _62.MsgCreateGroupWithPolicyAmino): _62.MsgCreateGroupWithPolicy;
                toAmino(message: _62.MsgCreateGroupWithPolicy): _62.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _62.MsgCreateGroupWithPolicyAminoMsg): _62.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _62.MsgCreateGroupWithPolicy): _62.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupWithPolicyProtoMsg): _62.MsgCreateGroupWithPolicy;
                toProto(message: _62.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroupWithPolicy): _62.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _62.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _62.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _62.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_62.MsgCreateGroupWithPolicyResponse>): _62.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _62.MsgCreateGroupWithPolicyResponseAmino): _62.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _62.MsgCreateGroupWithPolicyResponse): _62.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _62.MsgCreateGroupWithPolicyResponseAminoMsg): _62.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _62.MsgCreateGroupWithPolicyResponse): _62.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _62.MsgCreateGroupWithPolicyResponseProtoMsg): _62.MsgCreateGroupWithPolicyResponse;
                toProto(message: _62.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _62.MsgCreateGroupWithPolicyResponse): _62.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyAdminResponse>): _62.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _62.MsgUpdateGroupPolicyAdminResponseAmino): _62.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _62.MsgUpdateGroupPolicyAdminResponse): _62.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyAdminResponseAminoMsg): _62.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyAdminResponse): _62.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyAdminResponseProtoMsg): _62.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _62.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyAdminResponse): _62.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _62.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyDecisionPolicy>): _62.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _62.MsgUpdateGroupPolicyDecisionPolicyAmino): _62.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _62.MsgUpdateGroupPolicyDecisionPolicy): _62.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _62.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicy): _62.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _62.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _62.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicy): _62.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyDecisionPolicyResponse>): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): _62.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): _62.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _62.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyDecisionPolicyResponse): _62.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _62.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _62.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _62.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_62.MsgUpdateGroupPolicyMetadata>): _62.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _62.MsgUpdateGroupPolicyMetadataAmino): _62.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _62.MsgUpdateGroupPolicyMetadata): _62.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyMetadataAminoMsg): _62.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyMetadata): _62.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyMetadataProtoMsg): _62.MsgUpdateGroupPolicyMetadata;
                toProto(message: _62.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyMetadata): _62.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _62.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _62.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _62.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_62.MsgUpdateGroupPolicyMetadataResponse>): _62.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _62.MsgUpdateGroupPolicyMetadataResponseAmino): _62.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _62.MsgUpdateGroupPolicyMetadataResponse): _62.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _62.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _62.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _62.MsgUpdateGroupPolicyMetadataResponse): _62.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _62.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _62.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _62.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _62.MsgUpdateGroupPolicyMetadataResponse): _62.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposal;
                fromJSON(object: any): _62.MsgSubmitProposal;
                toJSON(message: _62.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposal>): _62.MsgSubmitProposal;
                fromAmino(object: _62.MsgSubmitProposalAmino): _62.MsgSubmitProposal;
                toAmino(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalAminoMsg): _62.MsgSubmitProposal;
                toAminoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalProtoMsg): _62.MsgSubmitProposal;
                toProto(message: _62.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposal): _62.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _62.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSubmitProposalResponse;
                fromJSON(object: any): _62.MsgSubmitProposalResponse;
                toJSON(message: _62.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_62.MsgSubmitProposalResponse>): _62.MsgSubmitProposalResponse;
                fromAmino(object: _62.MsgSubmitProposalResponseAmino): _62.MsgSubmitProposalResponse;
                toAmino(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _62.MsgSubmitProposalResponseAminoMsg): _62.MsgSubmitProposalResponse;
                toAminoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgSubmitProposalResponseProtoMsg): _62.MsgSubmitProposalResponse;
                toProto(message: _62.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgSubmitProposalResponse): _62.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _62.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposal;
                fromJSON(object: any): _62.MsgWithdrawProposal;
                toJSON(message: _62.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_62.MsgWithdrawProposal>): _62.MsgWithdrawProposal;
                fromAmino(object: _62.MsgWithdrawProposalAmino): _62.MsgWithdrawProposal;
                toAmino(message: _62.MsgWithdrawProposal): _62.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _62.MsgWithdrawProposalAminoMsg): _62.MsgWithdrawProposal;
                toAminoMsg(message: _62.MsgWithdrawProposal): _62.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawProposalProtoMsg): _62.MsgWithdrawProposal;
                toProto(message: _62.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawProposal): _62.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _62.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgWithdrawProposalResponse;
                fromJSON(_: any): _62.MsgWithdrawProposalResponse;
                toJSON(_: _62.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_62.MsgWithdrawProposalResponse>): _62.MsgWithdrawProposalResponse;
                fromAmino(_: _62.MsgWithdrawProposalResponseAmino): _62.MsgWithdrawProposalResponse;
                toAmino(_: _62.MsgWithdrawProposalResponse): _62.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _62.MsgWithdrawProposalResponseAminoMsg): _62.MsgWithdrawProposalResponse;
                toAminoMsg(message: _62.MsgWithdrawProposalResponse): _62.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _62.MsgWithdrawProposalResponseProtoMsg): _62.MsgWithdrawProposalResponse;
                toProto(message: _62.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _62.MsgWithdrawProposalResponse): _62.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _62.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVote;
                fromJSON(object: any): _62.MsgVote;
                toJSON(message: _62.MsgVote): unknown;
                fromPartial(object: Partial<_62.MsgVote>): _62.MsgVote;
                fromAmino(object: _62.MsgVoteAmino): _62.MsgVote;
                toAmino(message: _62.MsgVote): _62.MsgVoteAmino;
                fromAminoMsg(object: _62.MsgVoteAminoMsg): _62.MsgVote;
                toAminoMsg(message: _62.MsgVote): _62.MsgVoteAminoMsg;
                fromProtoMsg(message: _62.MsgVoteProtoMsg): _62.MsgVote;
                toProto(message: _62.MsgVote): Uint8Array;
                toProtoMsg(message: _62.MsgVote): _62.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _62.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgVoteResponse;
                fromJSON(_: any): _62.MsgVoteResponse;
                toJSON(_: _62.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_62.MsgVoteResponse>): _62.MsgVoteResponse;
                fromAmino(_: _62.MsgVoteResponseAmino): _62.MsgVoteResponse;
                toAmino(_: _62.MsgVoteResponse): _62.MsgVoteResponseAmino;
                fromAminoMsg(object: _62.MsgVoteResponseAminoMsg): _62.MsgVoteResponse;
                toAminoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _62.MsgVoteResponseProtoMsg): _62.MsgVoteResponse;
                toProto(message: _62.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _62.MsgVoteResponse): _62.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _62.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExec;
                fromJSON(object: any): _62.MsgExec;
                toJSON(message: _62.MsgExec): unknown;
                fromPartial(object: Partial<_62.MsgExec>): _62.MsgExec;
                fromAmino(object: _62.MsgExecAmino): _62.MsgExec;
                toAmino(message: _62.MsgExec): _62.MsgExecAmino;
                fromAminoMsg(object: _62.MsgExecAminoMsg): _62.MsgExec;
                toAminoMsg(message: _62.MsgExec): _62.MsgExecAminoMsg;
                fromProtoMsg(message: _62.MsgExecProtoMsg): _62.MsgExec;
                toProto(message: _62.MsgExec): Uint8Array;
                toProtoMsg(message: _62.MsgExec): _62.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _62.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecResponse;
                fromJSON(_: any): _62.MsgExecResponse;
                toJSON(_: _62.MsgExecResponse): unknown;
                fromPartial(_: Partial<_62.MsgExecResponse>): _62.MsgExecResponse;
                fromAmino(_: _62.MsgExecResponseAmino): _62.MsgExecResponse;
                toAmino(_: _62.MsgExecResponse): _62.MsgExecResponseAmino;
                fromAminoMsg(object: _62.MsgExecResponseAminoMsg): _62.MsgExecResponse;
                toAminoMsg(message: _62.MsgExecResponse): _62.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _62.MsgExecResponseProtoMsg): _62.MsgExecResponse;
                toProto(message: _62.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _62.MsgExecResponse): _62.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _62.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroup;
                fromJSON(object: any): _62.MsgLeaveGroup;
                toJSON(message: _62.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_62.MsgLeaveGroup>): _62.MsgLeaveGroup;
                fromAmino(object: _62.MsgLeaveGroupAmino): _62.MsgLeaveGroup;
                toAmino(message: _62.MsgLeaveGroup): _62.MsgLeaveGroupAmino;
                fromAminoMsg(object: _62.MsgLeaveGroupAminoMsg): _62.MsgLeaveGroup;
                toAminoMsg(message: _62.MsgLeaveGroup): _62.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _62.MsgLeaveGroupProtoMsg): _62.MsgLeaveGroup;
                toProto(message: _62.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _62.MsgLeaveGroup): _62.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _62.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgLeaveGroupResponse;
                fromJSON(_: any): _62.MsgLeaveGroupResponse;
                toJSON(_: _62.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_62.MsgLeaveGroupResponse>): _62.MsgLeaveGroupResponse;
                fromAmino(_: _62.MsgLeaveGroupResponseAmino): _62.MsgLeaveGroupResponse;
                toAmino(_: _62.MsgLeaveGroupResponse): _62.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _62.MsgLeaveGroupResponseAminoMsg): _62.MsgLeaveGroupResponse;
                toAminoMsg(message: _62.MsgLeaveGroupResponse): _62.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _62.MsgLeaveGroupResponseProtoMsg): _62.MsgLeaveGroupResponse;
                toProto(message: _62.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _62.MsgLeaveGroupResponse): _62.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoRequest;
                fromJSON(object: any): _61.QueryGroupInfoRequest;
                toJSON(message: _61.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupInfoRequest>): _61.QueryGroupInfoRequest;
                fromAmino(object: _61.QueryGroupInfoRequestAmino): _61.QueryGroupInfoRequest;
                toAmino(message: _61.QueryGroupInfoRequest): _61.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _61.QueryGroupInfoRequestAminoMsg): _61.QueryGroupInfoRequest;
                toAminoMsg(message: _61.QueryGroupInfoRequest): _61.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupInfoRequestProtoMsg): _61.QueryGroupInfoRequest;
                toProto(message: _61.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupInfoRequest): _61.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupInfoResponse;
                fromJSON(object: any): _61.QueryGroupInfoResponse;
                toJSON(message: _61.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupInfoResponse>): _61.QueryGroupInfoResponse;
                fromAmino(object: _61.QueryGroupInfoResponseAmino): _61.QueryGroupInfoResponse;
                toAmino(message: _61.QueryGroupInfoResponse): _61.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _61.QueryGroupInfoResponseAminoMsg): _61.QueryGroupInfoResponse;
                toAminoMsg(message: _61.QueryGroupInfoResponse): _61.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupInfoResponseProtoMsg): _61.QueryGroupInfoResponse;
                toProto(message: _61.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupInfoResponse): _61.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _61.QueryGroupPolicyInfoRequest;
                toJSON(message: _61.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoRequest>): _61.QueryGroupPolicyInfoRequest;
                fromAmino(object: _61.QueryGroupPolicyInfoRequestAmino): _61.QueryGroupPolicyInfoRequest;
                toAmino(message: _61.QueryGroupPolicyInfoRequest): _61.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _61.QueryGroupPolicyInfoRequestAminoMsg): _61.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _61.QueryGroupPolicyInfoRequest): _61.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPolicyInfoRequestProtoMsg): _61.QueryGroupPolicyInfoRequest;
                toProto(message: _61.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPolicyInfoRequest): _61.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _61.QueryGroupPolicyInfoResponse;
                toJSON(message: _61.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPolicyInfoResponse>): _61.QueryGroupPolicyInfoResponse;
                fromAmino(object: _61.QueryGroupPolicyInfoResponseAmino): _61.QueryGroupPolicyInfoResponse;
                toAmino(message: _61.QueryGroupPolicyInfoResponse): _61.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _61.QueryGroupPolicyInfoResponseAminoMsg): _61.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _61.QueryGroupPolicyInfoResponse): _61.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPolicyInfoResponseProtoMsg): _61.QueryGroupPolicyInfoResponse;
                toProto(message: _61.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPolicyInfoResponse): _61.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersRequest;
                fromJSON(object: any): _61.QueryGroupMembersRequest;
                toJSON(message: _61.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupMembersRequest>): _61.QueryGroupMembersRequest;
                fromAmino(object: _61.QueryGroupMembersRequestAmino): _61.QueryGroupMembersRequest;
                toAmino(message: _61.QueryGroupMembersRequest): _61.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _61.QueryGroupMembersRequestAminoMsg): _61.QueryGroupMembersRequest;
                toAminoMsg(message: _61.QueryGroupMembersRequest): _61.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupMembersRequestProtoMsg): _61.QueryGroupMembersRequest;
                toProto(message: _61.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupMembersRequest): _61.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupMembersResponse;
                fromJSON(object: any): _61.QueryGroupMembersResponse;
                toJSON(message: _61.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupMembersResponse>): _61.QueryGroupMembersResponse;
                fromAmino(object: _61.QueryGroupMembersResponseAmino): _61.QueryGroupMembersResponse;
                toAmino(message: _61.QueryGroupMembersResponse): _61.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _61.QueryGroupMembersResponseAminoMsg): _61.QueryGroupMembersResponse;
                toAminoMsg(message: _61.QueryGroupMembersResponse): _61.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupMembersResponseProtoMsg): _61.QueryGroupMembersResponse;
                toProto(message: _61.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupMembersResponse): _61.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminRequest;
                fromJSON(object: any): _61.QueryGroupsByAdminRequest;
                toJSON(message: _61.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByAdminRequest>): _61.QueryGroupsByAdminRequest;
                fromAmino(object: _61.QueryGroupsByAdminRequestAmino): _61.QueryGroupsByAdminRequest;
                toAmino(message: _61.QueryGroupsByAdminRequest): _61.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _61.QueryGroupsByAdminRequestAminoMsg): _61.QueryGroupsByAdminRequest;
                toAminoMsg(message: _61.QueryGroupsByAdminRequest): _61.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupsByAdminRequestProtoMsg): _61.QueryGroupsByAdminRequest;
                toProto(message: _61.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupsByAdminRequest): _61.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByAdminResponse;
                fromJSON(object: any): _61.QueryGroupsByAdminResponse;
                toJSON(message: _61.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByAdminResponse>): _61.QueryGroupsByAdminResponse;
                fromAmino(object: _61.QueryGroupsByAdminResponseAmino): _61.QueryGroupsByAdminResponse;
                toAmino(message: _61.QueryGroupsByAdminResponse): _61.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _61.QueryGroupsByAdminResponseAminoMsg): _61.QueryGroupsByAdminResponse;
                toAminoMsg(message: _61.QueryGroupsByAdminResponse): _61.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupsByAdminResponseProtoMsg): _61.QueryGroupsByAdminResponse;
                toProto(message: _61.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupsByAdminResponse): _61.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _61.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _61.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupRequest>): _61.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _61.QueryGroupPoliciesByGroupRequestAmino): _61.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _61.QueryGroupPoliciesByGroupRequest): _61.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _61.QueryGroupPoliciesByGroupRequestAminoMsg): _61.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _61.QueryGroupPoliciesByGroupRequest): _61.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPoliciesByGroupRequestProtoMsg): _61.QueryGroupPoliciesByGroupRequest;
                toProto(message: _61.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPoliciesByGroupRequest): _61.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _61.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _61.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByGroupResponse>): _61.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _61.QueryGroupPoliciesByGroupResponseAmino): _61.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _61.QueryGroupPoliciesByGroupResponse): _61.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _61.QueryGroupPoliciesByGroupResponseAminoMsg): _61.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _61.QueryGroupPoliciesByGroupResponse): _61.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPoliciesByGroupResponseProtoMsg): _61.QueryGroupPoliciesByGroupResponse;
                toProto(message: _61.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPoliciesByGroupResponse): _61.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _61.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _61.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminRequest>): _61.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _61.QueryGroupPoliciesByAdminRequestAmino): _61.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _61.QueryGroupPoliciesByAdminRequest): _61.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _61.QueryGroupPoliciesByAdminRequestAminoMsg): _61.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _61.QueryGroupPoliciesByAdminRequest): _61.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPoliciesByAdminRequestProtoMsg): _61.QueryGroupPoliciesByAdminRequest;
                toProto(message: _61.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPoliciesByAdminRequest): _61.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _61.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _61.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupPoliciesByAdminResponse>): _61.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _61.QueryGroupPoliciesByAdminResponseAmino): _61.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _61.QueryGroupPoliciesByAdminResponse): _61.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _61.QueryGroupPoliciesByAdminResponseAminoMsg): _61.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _61.QueryGroupPoliciesByAdminResponse): _61.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupPoliciesByAdminResponseProtoMsg): _61.QueryGroupPoliciesByAdminResponse;
                toProto(message: _61.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupPoliciesByAdminResponse): _61.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalRequest;
                fromJSON(object: any): _61.QueryProposalRequest;
                toJSON(message: _61.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalRequest>): _61.QueryProposalRequest;
                fromAmino(object: _61.QueryProposalRequestAmino): _61.QueryProposalRequest;
                toAmino(message: _61.QueryProposalRequest): _61.QueryProposalRequestAmino;
                fromAminoMsg(object: _61.QueryProposalRequestAminoMsg): _61.QueryProposalRequest;
                toAminoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalRequestProtoMsg): _61.QueryProposalRequest;
                toProto(message: _61.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalRequest): _61.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalResponse;
                fromJSON(object: any): _61.QueryProposalResponse;
                toJSON(message: _61.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalResponse>): _61.QueryProposalResponse;
                fromAmino(object: _61.QueryProposalResponseAmino): _61.QueryProposalResponse;
                toAmino(message: _61.QueryProposalResponse): _61.QueryProposalResponseAmino;
                fromAminoMsg(object: _61.QueryProposalResponseAminoMsg): _61.QueryProposalResponse;
                toAminoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalResponseProtoMsg): _61.QueryProposalResponse;
                toProto(message: _61.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalResponse): _61.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _61.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _61.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _61.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyRequest>): _61.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _61.QueryProposalsByGroupPolicyRequestAmino): _61.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _61.QueryProposalsByGroupPolicyRequest): _61.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _61.QueryProposalsByGroupPolicyRequestAminoMsg): _61.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _61.QueryProposalsByGroupPolicyRequest): _61.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsByGroupPolicyRequestProtoMsg): _61.QueryProposalsByGroupPolicyRequest;
                toProto(message: _61.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsByGroupPolicyRequest): _61.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _61.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _61.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _61.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_61.QueryProposalsByGroupPolicyResponse>): _61.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _61.QueryProposalsByGroupPolicyResponseAmino): _61.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _61.QueryProposalsByGroupPolicyResponse): _61.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _61.QueryProposalsByGroupPolicyResponseAminoMsg): _61.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _61.QueryProposalsByGroupPolicyResponse): _61.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _61.QueryProposalsByGroupPolicyResponseProtoMsg): _61.QueryProposalsByGroupPolicyResponse;
                toProto(message: _61.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _61.QueryProposalsByGroupPolicyResponse): _61.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _61.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _61.QueryVoteByProposalVoterRequest;
                toJSON(message: _61.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterRequest>): _61.QueryVoteByProposalVoterRequest;
                fromAmino(object: _61.QueryVoteByProposalVoterRequestAmino): _61.QueryVoteByProposalVoterRequest;
                toAmino(message: _61.QueryVoteByProposalVoterRequest): _61.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _61.QueryVoteByProposalVoterRequestAminoMsg): _61.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _61.QueryVoteByProposalVoterRequest): _61.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVoteByProposalVoterRequestProtoMsg): _61.QueryVoteByProposalVoterRequest;
                toProto(message: _61.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVoteByProposalVoterRequest): _61.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _61.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _61.QueryVoteByProposalVoterResponse;
                toJSON(message: _61.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_61.QueryVoteByProposalVoterResponse>): _61.QueryVoteByProposalVoterResponse;
                fromAmino(object: _61.QueryVoteByProposalVoterResponseAmino): _61.QueryVoteByProposalVoterResponse;
                toAmino(message: _61.QueryVoteByProposalVoterResponse): _61.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _61.QueryVoteByProposalVoterResponseAminoMsg): _61.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _61.QueryVoteByProposalVoterResponse): _61.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVoteByProposalVoterResponseProtoMsg): _61.QueryVoteByProposalVoterResponse;
                toProto(message: _61.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVoteByProposalVoterResponse): _61.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _61.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalRequest;
                fromJSON(object: any): _61.QueryVotesByProposalRequest;
                toJSON(message: _61.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesByProposalRequest>): _61.QueryVotesByProposalRequest;
                fromAmino(object: _61.QueryVotesByProposalRequestAmino): _61.QueryVotesByProposalRequest;
                toAmino(message: _61.QueryVotesByProposalRequest): _61.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _61.QueryVotesByProposalRequestAminoMsg): _61.QueryVotesByProposalRequest;
                toAminoMsg(message: _61.QueryVotesByProposalRequest): _61.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesByProposalRequestProtoMsg): _61.QueryVotesByProposalRequest;
                toProto(message: _61.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesByProposalRequest): _61.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _61.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByProposalResponse;
                fromJSON(object: any): _61.QueryVotesByProposalResponse;
                toJSON(message: _61.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesByProposalResponse>): _61.QueryVotesByProposalResponse;
                fromAmino(object: _61.QueryVotesByProposalResponseAmino): _61.QueryVotesByProposalResponse;
                toAmino(message: _61.QueryVotesByProposalResponse): _61.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _61.QueryVotesByProposalResponseAminoMsg): _61.QueryVotesByProposalResponse;
                toAminoMsg(message: _61.QueryVotesByProposalResponse): _61.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesByProposalResponseProtoMsg): _61.QueryVotesByProposalResponse;
                toProto(message: _61.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesByProposalResponse): _61.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _61.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterRequest;
                fromJSON(object: any): _61.QueryVotesByVoterRequest;
                toJSON(message: _61.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_61.QueryVotesByVoterRequest>): _61.QueryVotesByVoterRequest;
                fromAmino(object: _61.QueryVotesByVoterRequestAmino): _61.QueryVotesByVoterRequest;
                toAmino(message: _61.QueryVotesByVoterRequest): _61.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _61.QueryVotesByVoterRequestAminoMsg): _61.QueryVotesByVoterRequest;
                toAminoMsg(message: _61.QueryVotesByVoterRequest): _61.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _61.QueryVotesByVoterRequestProtoMsg): _61.QueryVotesByVoterRequest;
                toProto(message: _61.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _61.QueryVotesByVoterRequest): _61.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _61.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryVotesByVoterResponse;
                fromJSON(object: any): _61.QueryVotesByVoterResponse;
                toJSON(message: _61.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_61.QueryVotesByVoterResponse>): _61.QueryVotesByVoterResponse;
                fromAmino(object: _61.QueryVotesByVoterResponseAmino): _61.QueryVotesByVoterResponse;
                toAmino(message: _61.QueryVotesByVoterResponse): _61.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _61.QueryVotesByVoterResponseAminoMsg): _61.QueryVotesByVoterResponse;
                toAminoMsg(message: _61.QueryVotesByVoterResponse): _61.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _61.QueryVotesByVoterResponseProtoMsg): _61.QueryVotesByVoterResponse;
                toProto(message: _61.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _61.QueryVotesByVoterResponse): _61.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _61.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberRequest;
                fromJSON(object: any): _61.QueryGroupsByMemberRequest;
                toJSON(message: _61.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByMemberRequest>): _61.QueryGroupsByMemberRequest;
                fromAmino(object: _61.QueryGroupsByMemberRequestAmino): _61.QueryGroupsByMemberRequest;
                toAmino(message: _61.QueryGroupsByMemberRequest): _61.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _61.QueryGroupsByMemberRequestAminoMsg): _61.QueryGroupsByMemberRequest;
                toAminoMsg(message: _61.QueryGroupsByMemberRequest): _61.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _61.QueryGroupsByMemberRequestProtoMsg): _61.QueryGroupsByMemberRequest;
                toProto(message: _61.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _61.QueryGroupsByMemberRequest): _61.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _61.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryGroupsByMemberResponse;
                fromJSON(object: any): _61.QueryGroupsByMemberResponse;
                toJSON(message: _61.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_61.QueryGroupsByMemberResponse>): _61.QueryGroupsByMemberResponse;
                fromAmino(object: _61.QueryGroupsByMemberResponseAmino): _61.QueryGroupsByMemberResponse;
                toAmino(message: _61.QueryGroupsByMemberResponse): _61.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _61.QueryGroupsByMemberResponseAminoMsg): _61.QueryGroupsByMemberResponse;
                toAminoMsg(message: _61.QueryGroupsByMemberResponse): _61.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _61.QueryGroupsByMemberResponseProtoMsg): _61.QueryGroupsByMemberResponse;
                toProto(message: _61.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _61.QueryGroupsByMemberResponse): _61.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultRequest;
                fromJSON(object: any): _61.QueryTallyResultRequest;
                toJSON(message: _61.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultRequest>): _61.QueryTallyResultRequest;
                fromAmino(object: _61.QueryTallyResultRequestAmino): _61.QueryTallyResultRequest;
                toAmino(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _61.QueryTallyResultRequestAminoMsg): _61.QueryTallyResultRequest;
                toAminoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultRequestProtoMsg): _61.QueryTallyResultRequest;
                toProto(message: _61.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultRequest): _61.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _61.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryTallyResultResponse;
                fromJSON(object: any): _61.QueryTallyResultResponse;
                toJSON(message: _61.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_61.QueryTallyResultResponse>): _61.QueryTallyResultResponse;
                fromAmino(object: _61.QueryTallyResultResponseAmino): _61.QueryTallyResultResponse;
                toAmino(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _61.QueryTallyResultResponseAminoMsg): _61.QueryTallyResultResponse;
                toAminoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _61.QueryTallyResultResponseProtoMsg): _61.QueryTallyResultResponse;
                toProto(message: _61.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _61.QueryTallyResultResponse): _61.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                toProto(message: _60.GenesisState): Uint8Array;
                toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _59.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroup;
                fromJSON(object: any): _59.EventCreateGroup;
                toJSON(message: _59.EventCreateGroup): unknown;
                fromPartial(object: Partial<_59.EventCreateGroup>): _59.EventCreateGroup;
                fromAmino(object: _59.EventCreateGroupAmino): _59.EventCreateGroup;
                toAmino(message: _59.EventCreateGroup): _59.EventCreateGroupAmino;
                fromAminoMsg(object: _59.EventCreateGroupAminoMsg): _59.EventCreateGroup;
                toAminoMsg(message: _59.EventCreateGroup): _59.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _59.EventCreateGroupProtoMsg): _59.EventCreateGroup;
                toProto(message: _59.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _59.EventCreateGroup): _59.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _59.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroup;
                fromJSON(object: any): _59.EventUpdateGroup;
                toJSON(message: _59.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_59.EventUpdateGroup>): _59.EventUpdateGroup;
                fromAmino(object: _59.EventUpdateGroupAmino): _59.EventUpdateGroup;
                toAmino(message: _59.EventUpdateGroup): _59.EventUpdateGroupAmino;
                fromAminoMsg(object: _59.EventUpdateGroupAminoMsg): _59.EventUpdateGroup;
                toAminoMsg(message: _59.EventUpdateGroup): _59.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _59.EventUpdateGroupProtoMsg): _59.EventUpdateGroup;
                toProto(message: _59.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _59.EventUpdateGroup): _59.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _59.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventCreateGroupPolicy;
                fromJSON(object: any): _59.EventCreateGroupPolicy;
                toJSON(message: _59.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_59.EventCreateGroupPolicy>): _59.EventCreateGroupPolicy;
                fromAmino(object: _59.EventCreateGroupPolicyAmino): _59.EventCreateGroupPolicy;
                toAmino(message: _59.EventCreateGroupPolicy): _59.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _59.EventCreateGroupPolicyAminoMsg): _59.EventCreateGroupPolicy;
                toAminoMsg(message: _59.EventCreateGroupPolicy): _59.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _59.EventCreateGroupPolicyProtoMsg): _59.EventCreateGroupPolicy;
                toProto(message: _59.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _59.EventCreateGroupPolicy): _59.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _59.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventUpdateGroupPolicy;
                fromJSON(object: any): _59.EventUpdateGroupPolicy;
                toJSON(message: _59.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_59.EventUpdateGroupPolicy>): _59.EventUpdateGroupPolicy;
                fromAmino(object: _59.EventUpdateGroupPolicyAmino): _59.EventUpdateGroupPolicy;
                toAmino(message: _59.EventUpdateGroupPolicy): _59.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _59.EventUpdateGroupPolicyAminoMsg): _59.EventUpdateGroupPolicy;
                toAminoMsg(message: _59.EventUpdateGroupPolicy): _59.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _59.EventUpdateGroupPolicyProtoMsg): _59.EventUpdateGroupPolicy;
                toProto(message: _59.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _59.EventUpdateGroupPolicy): _59.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _59.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventSubmitProposal;
                fromJSON(object: any): _59.EventSubmitProposal;
                toJSON(message: _59.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_59.EventSubmitProposal>): _59.EventSubmitProposal;
                fromAmino(object: _59.EventSubmitProposalAmino): _59.EventSubmitProposal;
                toAmino(message: _59.EventSubmitProposal): _59.EventSubmitProposalAmino;
                fromAminoMsg(object: _59.EventSubmitProposalAminoMsg): _59.EventSubmitProposal;
                toAminoMsg(message: _59.EventSubmitProposal): _59.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _59.EventSubmitProposalProtoMsg): _59.EventSubmitProposal;
                toProto(message: _59.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _59.EventSubmitProposal): _59.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _59.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventWithdrawProposal;
                fromJSON(object: any): _59.EventWithdrawProposal;
                toJSON(message: _59.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_59.EventWithdrawProposal>): _59.EventWithdrawProposal;
                fromAmino(object: _59.EventWithdrawProposalAmino): _59.EventWithdrawProposal;
                toAmino(message: _59.EventWithdrawProposal): _59.EventWithdrawProposalAmino;
                fromAminoMsg(object: _59.EventWithdrawProposalAminoMsg): _59.EventWithdrawProposal;
                toAminoMsg(message: _59.EventWithdrawProposal): _59.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _59.EventWithdrawProposalProtoMsg): _59.EventWithdrawProposal;
                toProto(message: _59.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _59.EventWithdrawProposal): _59.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _59.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventVote;
                fromJSON(object: any): _59.EventVote;
                toJSON(message: _59.EventVote): unknown;
                fromPartial(object: Partial<_59.EventVote>): _59.EventVote;
                fromAmino(object: _59.EventVoteAmino): _59.EventVote;
                toAmino(message: _59.EventVote): _59.EventVoteAmino;
                fromAminoMsg(object: _59.EventVoteAminoMsg): _59.EventVote;
                toAminoMsg(message: _59.EventVote): _59.EventVoteAminoMsg;
                fromProtoMsg(message: _59.EventVoteProtoMsg): _59.EventVote;
                toProto(message: _59.EventVote): Uint8Array;
                toProtoMsg(message: _59.EventVote): _59.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _59.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventExec;
                fromJSON(object: any): _59.EventExec;
                toJSON(message: _59.EventExec): unknown;
                fromPartial(object: Partial<_59.EventExec>): _59.EventExec;
                fromAmino(object: _59.EventExecAmino): _59.EventExec;
                toAmino(message: _59.EventExec): _59.EventExecAmino;
                fromAminoMsg(object: _59.EventExecAminoMsg): _59.EventExec;
                toAminoMsg(message: _59.EventExec): _59.EventExecAminoMsg;
                fromProtoMsg(message: _59.EventExecProtoMsg): _59.EventExec;
                toProto(message: _59.EventExec): Uint8Array;
                toProtoMsg(message: _59.EventExec): _59.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _59.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.EventLeaveGroup;
                fromJSON(object: any): _59.EventLeaveGroup;
                toJSON(message: _59.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_59.EventLeaveGroup>): _59.EventLeaveGroup;
                fromAmino(object: _59.EventLeaveGroupAmino): _59.EventLeaveGroup;
                toAmino(message: _59.EventLeaveGroup): _59.EventLeaveGroupAmino;
                fromAminoMsg(object: _59.EventLeaveGroupAminoMsg): _59.EventLeaveGroup;
                toAminoMsg(message: _59.EventLeaveGroup): _59.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _59.EventLeaveGroupProtoMsg): _59.EventLeaveGroup;
                toProto(message: _59.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _59.EventLeaveGroup): _59.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                fromJSON(_: any): _66.QueryParamsRequest;
                toJSON(_: _66.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                fromJSON(object: any): _66.QueryParamsResponse;
                toJSON(message: _66.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _66.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationRequest;
                fromJSON(_: any): _66.QueryInflationRequest;
                toJSON(_: _66.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_66.QueryInflationRequest>): _66.QueryInflationRequest;
                fromAmino(_: _66.QueryInflationRequestAmino): _66.QueryInflationRequest;
                toAmino(_: _66.QueryInflationRequest): _66.QueryInflationRequestAmino;
                fromAminoMsg(object: _66.QueryInflationRequestAminoMsg): _66.QueryInflationRequest;
                toAminoMsg(message: _66.QueryInflationRequest): _66.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _66.QueryInflationRequestProtoMsg): _66.QueryInflationRequest;
                toProto(message: _66.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _66.QueryInflationRequest): _66.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _66.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInflationResponse;
                fromJSON(object: any): _66.QueryInflationResponse;
                toJSON(message: _66.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_66.QueryInflationResponse>): _66.QueryInflationResponse;
                fromAmino(object: _66.QueryInflationResponseAmino): _66.QueryInflationResponse;
                toAmino(message: _66.QueryInflationResponse): _66.QueryInflationResponseAmino;
                fromAminoMsg(object: _66.QueryInflationResponseAminoMsg): _66.QueryInflationResponse;
                toAminoMsg(message: _66.QueryInflationResponse): _66.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _66.QueryInflationResponseProtoMsg): _66.QueryInflationResponse;
                toProto(message: _66.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _66.QueryInflationResponse): _66.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _66.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _66.QueryAnnualProvisionsRequest;
                toJSON(_: _66.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_66.QueryAnnualProvisionsRequest>): _66.QueryAnnualProvisionsRequest;
                fromAmino(_: _66.QueryAnnualProvisionsRequestAmino): _66.QueryAnnualProvisionsRequest;
                toAmino(_: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _66.QueryAnnualProvisionsRequestAminoMsg): _66.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAnnualProvisionsRequestProtoMsg): _66.QueryAnnualProvisionsRequest;
                toProto(message: _66.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAnnualProvisionsRequest): _66.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _66.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _66.QueryAnnualProvisionsResponse;
                toJSON(message: _66.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_66.QueryAnnualProvisionsResponse>): _66.QueryAnnualProvisionsResponse;
                fromAmino(object: _66.QueryAnnualProvisionsResponseAmino): _66.QueryAnnualProvisionsResponse;
                toAmino(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _66.QueryAnnualProvisionsResponseAminoMsg): _66.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAnnualProvisionsResponseProtoMsg): _66.QueryAnnualProvisionsResponse;
                toProto(message: _66.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAnnualProvisionsResponse): _66.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _65.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Minter;
                fromJSON(object: any): _65.Minter;
                toJSON(message: _65.Minter): unknown;
                fromPartial(object: Partial<_65.Minter>): _65.Minter;
                fromAmino(object: _65.MinterAmino): _65.Minter;
                toAmino(message: _65.Minter): _65.MinterAmino;
                fromAminoMsg(object: _65.MinterAminoMsg): _65.Minter;
                toAminoMsg(message: _65.Minter): _65.MinterAminoMsg;
                fromProtoMsg(message: _65.MinterProtoMsg): _65.Minter;
                toProto(message: _65.Minter): Uint8Array;
                toProtoMsg(message: _65.Minter): _65.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                fromJSON(object: any): _65.Params;
                toJSON(message: _65.Params): unknown;
                fromPartial(object: Partial<_65.Params>): _65.Params;
                fromAmino(object: _65.ParamsAmino): _65.Params;
                toAmino(message: _65.Params): _65.ParamsAmino;
                fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                toProto(message: _65.Params): Uint8Array;
                toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _64.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.GenesisState;
                fromJSON(object: any): _64.GenesisState;
                toJSON(message: _64.GenesisState): unknown;
                fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                toProto(message: _64.GenesisState): Uint8Array;
                toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                owner(request: _71.QueryOwnerRequest): Promise<_71.QueryOwnerResponse>;
                supply(request: _71.QuerySupplyRequest): Promise<_71.QuerySupplyResponse>;
                nFTs(request: _71.QueryNFTsRequest): Promise<_71.QueryNFTsResponse>;
                nFT(request: _71.QueryNFTRequest): Promise<_71.QueryNFTResponse>;
                class(request: _71.QueryClassRequest): Promise<_71.QueryClassResponse>;
                classes(request?: _71.QueryClassesRequest): Promise<_71.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _72.MsgSend): {
                        typeUrl: string;
                        value: _72.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _72.MsgSend) => _72.MsgSendAmino;
                    fromAmino: (object: _72.MsgSendAmino) => _72.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _72.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSend;
                fromJSON(object: any): _72.MsgSend;
                toJSON(message: _72.MsgSend): unknown;
                fromPartial(object: Partial<_72.MsgSend>): _72.MsgSend;
                fromAmino(object: _72.MsgSendAmino): _72.MsgSend;
                toAmino(message: _72.MsgSend): _72.MsgSendAmino;
                fromAminoMsg(object: _72.MsgSendAminoMsg): _72.MsgSend;
                toAminoMsg(message: _72.MsgSend): _72.MsgSendAminoMsg;
                fromProtoMsg(message: _72.MsgSendProtoMsg): _72.MsgSend;
                toProto(message: _72.MsgSend): Uint8Array;
                toProtoMsg(message: _72.MsgSend): _72.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _72.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgSendResponse;
                fromJSON(_: any): _72.MsgSendResponse;
                toJSON(_: _72.MsgSendResponse): unknown;
                fromPartial(_: Partial<_72.MsgSendResponse>): _72.MsgSendResponse;
                fromAmino(_: _72.MsgSendResponseAmino): _72.MsgSendResponse;
                toAmino(_: _72.MsgSendResponse): _72.MsgSendResponseAmino;
                fromAminoMsg(object: _72.MsgSendResponseAminoMsg): _72.MsgSendResponse;
                toAminoMsg(message: _72.MsgSendResponse): _72.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _72.MsgSendResponseProtoMsg): _72.MsgSendResponse;
                toProto(message: _72.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _72.MsgSendResponse): _72.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _71.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceRequest;
                fromJSON(object: any): _71.QueryBalanceRequest;
                toJSON(message: _71.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_71.QueryBalanceRequest>): _71.QueryBalanceRequest;
                fromAmino(object: _71.QueryBalanceRequestAmino): _71.QueryBalanceRequest;
                toAmino(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestAmino;
                fromAminoMsg(object: _71.QueryBalanceRequestAminoMsg): _71.QueryBalanceRequest;
                toAminoMsg(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _71.QueryBalanceRequestProtoMsg): _71.QueryBalanceRequest;
                toProto(message: _71.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _71.QueryBalanceRequest): _71.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _71.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryBalanceResponse;
                fromJSON(object: any): _71.QueryBalanceResponse;
                toJSON(message: _71.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_71.QueryBalanceResponse>): _71.QueryBalanceResponse;
                fromAmino(object: _71.QueryBalanceResponseAmino): _71.QueryBalanceResponse;
                toAmino(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseAmino;
                fromAminoMsg(object: _71.QueryBalanceResponseAminoMsg): _71.QueryBalanceResponse;
                toAminoMsg(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _71.QueryBalanceResponseProtoMsg): _71.QueryBalanceResponse;
                toProto(message: _71.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _71.QueryBalanceResponse): _71.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _71.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerRequest;
                fromJSON(object: any): _71.QueryOwnerRequest;
                toJSON(message: _71.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_71.QueryOwnerRequest>): _71.QueryOwnerRequest;
                fromAmino(object: _71.QueryOwnerRequestAmino): _71.QueryOwnerRequest;
                toAmino(message: _71.QueryOwnerRequest): _71.QueryOwnerRequestAmino;
                fromAminoMsg(object: _71.QueryOwnerRequestAminoMsg): _71.QueryOwnerRequest;
                toAminoMsg(message: _71.QueryOwnerRequest): _71.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _71.QueryOwnerRequestProtoMsg): _71.QueryOwnerRequest;
                toProto(message: _71.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _71.QueryOwnerRequest): _71.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _71.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryOwnerResponse;
                fromJSON(object: any): _71.QueryOwnerResponse;
                toJSON(message: _71.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_71.QueryOwnerResponse>): _71.QueryOwnerResponse;
                fromAmino(object: _71.QueryOwnerResponseAmino): _71.QueryOwnerResponse;
                toAmino(message: _71.QueryOwnerResponse): _71.QueryOwnerResponseAmino;
                fromAminoMsg(object: _71.QueryOwnerResponseAminoMsg): _71.QueryOwnerResponse;
                toAminoMsg(message: _71.QueryOwnerResponse): _71.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _71.QueryOwnerResponseProtoMsg): _71.QueryOwnerResponse;
                toProto(message: _71.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _71.QueryOwnerResponse): _71.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _71.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyRequest;
                fromJSON(object: any): _71.QuerySupplyRequest;
                toJSON(message: _71.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_71.QuerySupplyRequest>): _71.QuerySupplyRequest;
                fromAmino(object: _71.QuerySupplyRequestAmino): _71.QuerySupplyRequest;
                toAmino(message: _71.QuerySupplyRequest): _71.QuerySupplyRequestAmino;
                fromAminoMsg(object: _71.QuerySupplyRequestAminoMsg): _71.QuerySupplyRequest;
                toAminoMsg(message: _71.QuerySupplyRequest): _71.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _71.QuerySupplyRequestProtoMsg): _71.QuerySupplyRequest;
                toProto(message: _71.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _71.QuerySupplyRequest): _71.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _71.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QuerySupplyResponse;
                fromJSON(object: any): _71.QuerySupplyResponse;
                toJSON(message: _71.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_71.QuerySupplyResponse>): _71.QuerySupplyResponse;
                fromAmino(object: _71.QuerySupplyResponseAmino): _71.QuerySupplyResponse;
                toAmino(message: _71.QuerySupplyResponse): _71.QuerySupplyResponseAmino;
                fromAminoMsg(object: _71.QuerySupplyResponseAminoMsg): _71.QuerySupplyResponse;
                toAminoMsg(message: _71.QuerySupplyResponse): _71.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _71.QuerySupplyResponseProtoMsg): _71.QuerySupplyResponse;
                toProto(message: _71.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _71.QuerySupplyResponse): _71.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _71.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsRequest;
                fromJSON(object: any): _71.QueryNFTsRequest;
                toJSON(message: _71.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_71.QueryNFTsRequest>): _71.QueryNFTsRequest;
                fromAmino(object: _71.QueryNFTsRequestAmino): _71.QueryNFTsRequest;
                toAmino(message: _71.QueryNFTsRequest): _71.QueryNFTsRequestAmino;
                fromAminoMsg(object: _71.QueryNFTsRequestAminoMsg): _71.QueryNFTsRequest;
                toAminoMsg(message: _71.QueryNFTsRequest): _71.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _71.QueryNFTsRequestProtoMsg): _71.QueryNFTsRequest;
                toProto(message: _71.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryNFTsRequest): _71.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _71.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTsResponse;
                fromJSON(object: any): _71.QueryNFTsResponse;
                toJSON(message: _71.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_71.QueryNFTsResponse>): _71.QueryNFTsResponse;
                fromAmino(object: _71.QueryNFTsResponseAmino): _71.QueryNFTsResponse;
                toAmino(message: _71.QueryNFTsResponse): _71.QueryNFTsResponseAmino;
                fromAminoMsg(object: _71.QueryNFTsResponseAminoMsg): _71.QueryNFTsResponse;
                toAminoMsg(message: _71.QueryNFTsResponse): _71.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _71.QueryNFTsResponseProtoMsg): _71.QueryNFTsResponse;
                toProto(message: _71.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryNFTsResponse): _71.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _71.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTRequest;
                fromJSON(object: any): _71.QueryNFTRequest;
                toJSON(message: _71.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_71.QueryNFTRequest>): _71.QueryNFTRequest;
                fromAmino(object: _71.QueryNFTRequestAmino): _71.QueryNFTRequest;
                toAmino(message: _71.QueryNFTRequest): _71.QueryNFTRequestAmino;
                fromAminoMsg(object: _71.QueryNFTRequestAminoMsg): _71.QueryNFTRequest;
                toAminoMsg(message: _71.QueryNFTRequest): _71.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _71.QueryNFTRequestProtoMsg): _71.QueryNFTRequest;
                toProto(message: _71.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _71.QueryNFTRequest): _71.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _71.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryNFTResponse;
                fromJSON(object: any): _71.QueryNFTResponse;
                toJSON(message: _71.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_71.QueryNFTResponse>): _71.QueryNFTResponse;
                fromAmino(object: _71.QueryNFTResponseAmino): _71.QueryNFTResponse;
                toAmino(message: _71.QueryNFTResponse): _71.QueryNFTResponseAmino;
                fromAminoMsg(object: _71.QueryNFTResponseAminoMsg): _71.QueryNFTResponse;
                toAminoMsg(message: _71.QueryNFTResponse): _71.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _71.QueryNFTResponseProtoMsg): _71.QueryNFTResponse;
                toProto(message: _71.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _71.QueryNFTResponse): _71.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _71.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassRequest;
                fromJSON(object: any): _71.QueryClassRequest;
                toJSON(message: _71.QueryClassRequest): unknown;
                fromPartial(object: Partial<_71.QueryClassRequest>): _71.QueryClassRequest;
                fromAmino(object: _71.QueryClassRequestAmino): _71.QueryClassRequest;
                toAmino(message: _71.QueryClassRequest): _71.QueryClassRequestAmino;
                fromAminoMsg(object: _71.QueryClassRequestAminoMsg): _71.QueryClassRequest;
                toAminoMsg(message: _71.QueryClassRequest): _71.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _71.QueryClassRequestProtoMsg): _71.QueryClassRequest;
                toProto(message: _71.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _71.QueryClassRequest): _71.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _71.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassResponse;
                fromJSON(object: any): _71.QueryClassResponse;
                toJSON(message: _71.QueryClassResponse): unknown;
                fromPartial(object: Partial<_71.QueryClassResponse>): _71.QueryClassResponse;
                fromAmino(object: _71.QueryClassResponseAmino): _71.QueryClassResponse;
                toAmino(message: _71.QueryClassResponse): _71.QueryClassResponseAmino;
                fromAminoMsg(object: _71.QueryClassResponseAminoMsg): _71.QueryClassResponse;
                toAminoMsg(message: _71.QueryClassResponse): _71.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _71.QueryClassResponseProtoMsg): _71.QueryClassResponse;
                toProto(message: _71.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _71.QueryClassResponse): _71.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _71.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesRequest;
                fromJSON(object: any): _71.QueryClassesRequest;
                toJSON(message: _71.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_71.QueryClassesRequest>): _71.QueryClassesRequest;
                fromAmino(object: _71.QueryClassesRequestAmino): _71.QueryClassesRequest;
                toAmino(message: _71.QueryClassesRequest): _71.QueryClassesRequestAmino;
                fromAminoMsg(object: _71.QueryClassesRequestAminoMsg): _71.QueryClassesRequest;
                toAminoMsg(message: _71.QueryClassesRequest): _71.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _71.QueryClassesRequestProtoMsg): _71.QueryClassesRequest;
                toProto(message: _71.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _71.QueryClassesRequest): _71.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _71.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryClassesResponse;
                fromJSON(object: any): _71.QueryClassesResponse;
                toJSON(message: _71.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_71.QueryClassesResponse>): _71.QueryClassesResponse;
                fromAmino(object: _71.QueryClassesResponseAmino): _71.QueryClassesResponse;
                toAmino(message: _71.QueryClassesResponse): _71.QueryClassesResponseAmino;
                fromAminoMsg(object: _71.QueryClassesResponseAminoMsg): _71.QueryClassesResponse;
                toAminoMsg(message: _71.QueryClassesResponse): _71.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _71.QueryClassesResponseProtoMsg): _71.QueryClassesResponse;
                toProto(message: _71.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _71.QueryClassesResponse): _71.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _70.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Class;
                fromJSON(object: any): _70.Class;
                toJSON(message: _70.Class): unknown;
                fromPartial(object: Partial<_70.Class>): _70.Class;
                fromAmino(object: _70.ClassAmino): _70.Class;
                toAmino(message: _70.Class): _70.ClassAmino;
                fromAminoMsg(object: _70.ClassAminoMsg): _70.Class;
                toAminoMsg(message: _70.Class): _70.ClassAminoMsg;
                fromProtoMsg(message: _70.ClassProtoMsg): _70.Class;
                toProto(message: _70.Class): Uint8Array;
                toProtoMsg(message: _70.Class): _70.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _70.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.NFT;
                fromJSON(object: any): _70.NFT;
                toJSON(message: _70.NFT): unknown;
                fromPartial(object: Partial<_70.NFT>): _70.NFT;
                fromAmino(object: _70.NFTAmino): _70.NFT;
                toAmino(message: _70.NFT): _70.NFTAmino;
                fromAminoMsg(object: _70.NFTAminoMsg): _70.NFT;
                toAminoMsg(message: _70.NFT): _70.NFTAminoMsg;
                fromProtoMsg(message: _70.NFTProtoMsg): _70.NFT;
                toProto(message: _70.NFT): Uint8Array;
                toProtoMsg(message: _70.NFT): _70.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                toJSON(message: _69.GenesisState): unknown;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _69.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Entry;
                fromJSON(object: any): _69.Entry;
                toJSON(message: _69.Entry): unknown;
                fromPartial(object: Partial<_69.Entry>): _69.Entry;
                fromAmino(object: _69.EntryAmino): _69.Entry;
                toAmino(message: _69.Entry): _69.EntryAmino;
                fromAminoMsg(object: _69.EntryAminoMsg): _69.Entry;
                toAminoMsg(message: _69.Entry): _69.EntryAminoMsg;
                fromProtoMsg(message: _69.EntryProtoMsg): _69.Entry;
                toProto(message: _69.Entry): Uint8Array;
                toProtoMsg(message: _69.Entry): _69.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _68.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventSend;
                fromJSON(object: any): _68.EventSend;
                toJSON(message: _68.EventSend): unknown;
                fromPartial(object: Partial<_68.EventSend>): _68.EventSend;
                fromAmino(object: _68.EventSendAmino): _68.EventSend;
                toAmino(message: _68.EventSend): _68.EventSendAmino;
                fromAminoMsg(object: _68.EventSendAminoMsg): _68.EventSend;
                toAminoMsg(message: _68.EventSend): _68.EventSendAminoMsg;
                fromProtoMsg(message: _68.EventSendProtoMsg): _68.EventSend;
                toProto(message: _68.EventSend): Uint8Array;
                toProtoMsg(message: _68.EventSend): _68.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _68.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventMint;
                fromJSON(object: any): _68.EventMint;
                toJSON(message: _68.EventMint): unknown;
                fromPartial(object: Partial<_68.EventMint>): _68.EventMint;
                fromAmino(object: _68.EventMintAmino): _68.EventMint;
                toAmino(message: _68.EventMint): _68.EventMintAmino;
                fromAminoMsg(object: _68.EventMintAminoMsg): _68.EventMint;
                toAminoMsg(message: _68.EventMint): _68.EventMintAminoMsg;
                fromProtoMsg(message: _68.EventMintProtoMsg): _68.EventMint;
                toProto(message: _68.EventMint): Uint8Array;
                toProtoMsg(message: _68.EventMint): _68.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _68.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.EventBurn;
                fromJSON(object: any): _68.EventBurn;
                toJSON(message: _68.EventBurn): unknown;
                fromPartial(object: Partial<_68.EventBurn>): _68.EventBurn;
                fromAmino(object: _68.EventBurnAmino): _68.EventBurn;
                toAmino(message: _68.EventBurn): _68.EventBurnAmino;
                fromAminoMsg(object: _68.EventBurnAminoMsg): _68.EventBurn;
                toAminoMsg(message: _68.EventBurn): _68.EventBurnAminoMsg;
                fromProtoMsg(message: _68.EventBurnProtoMsg): _68.EventBurn;
                toProto(message: _68.EventBurn): Uint8Array;
                toProtoMsg(message: _68.EventBurn): _68.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _73.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TableDescriptor;
                fromJSON(object: any): _73.TableDescriptor;
                toJSON(message: _73.TableDescriptor): unknown;
                fromPartial(object: Partial<_73.TableDescriptor>): _73.TableDescriptor;
                fromAmino(object: _73.TableDescriptorAmino): _73.TableDescriptor;
                toAmino(message: _73.TableDescriptor): _73.TableDescriptorAmino;
                fromAminoMsg(object: _73.TableDescriptorAminoMsg): _73.TableDescriptor;
                toAminoMsg(message: _73.TableDescriptor): _73.TableDescriptorAminoMsg;
                fromProtoMsg(message: _73.TableDescriptorProtoMsg): _73.TableDescriptor;
                toProto(message: _73.TableDescriptor): Uint8Array;
                toProtoMsg(message: _73.TableDescriptor): _73.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _73.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PrimaryKeyDescriptor;
                fromJSON(object: any): _73.PrimaryKeyDescriptor;
                toJSON(message: _73.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_73.PrimaryKeyDescriptor>): _73.PrimaryKeyDescriptor;
                fromAmino(object: _73.PrimaryKeyDescriptorAmino): _73.PrimaryKeyDescriptor;
                toAmino(message: _73.PrimaryKeyDescriptor): _73.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _73.PrimaryKeyDescriptorAminoMsg): _73.PrimaryKeyDescriptor;
                toAminoMsg(message: _73.PrimaryKeyDescriptor): _73.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _73.PrimaryKeyDescriptorProtoMsg): _73.PrimaryKeyDescriptor;
                toProto(message: _73.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _73.PrimaryKeyDescriptor): _73.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _73.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SecondaryIndexDescriptor;
                fromJSON(object: any): _73.SecondaryIndexDescriptor;
                toJSON(message: _73.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_73.SecondaryIndexDescriptor>): _73.SecondaryIndexDescriptor;
                fromAmino(object: _73.SecondaryIndexDescriptorAmino): _73.SecondaryIndexDescriptor;
                toAmino(message: _73.SecondaryIndexDescriptor): _73.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _73.SecondaryIndexDescriptorAminoMsg): _73.SecondaryIndexDescriptor;
                toAminoMsg(message: _73.SecondaryIndexDescriptor): _73.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _73.SecondaryIndexDescriptorProtoMsg): _73.SecondaryIndexDescriptor;
                toProto(message: _73.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _73.SecondaryIndexDescriptor): _73.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _73.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.SingletonDescriptor;
                fromJSON(object: any): _73.SingletonDescriptor;
                toJSON(message: _73.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_73.SingletonDescriptor>): _73.SingletonDescriptor;
                fromAmino(object: _73.SingletonDescriptorAmino): _73.SingletonDescriptor;
                toAmino(message: _73.SingletonDescriptor): _73.SingletonDescriptorAmino;
                fromAminoMsg(object: _73.SingletonDescriptorAminoMsg): _73.SingletonDescriptor;
                toAminoMsg(message: _73.SingletonDescriptor): _73.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _73.SingletonDescriptorProtoMsg): _73.SingletonDescriptor;
                toProto(message: _73.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _73.SingletonDescriptor): _73.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _74.StorageType;
            storageTypeToJSON(object: _74.StorageType): string;
            StorageType: typeof _74.StorageType;
            StorageTypeSDKType: typeof _74.StorageType;
            StorageTypeAmino: typeof _74.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _74.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ModuleSchemaDescriptor;
                fromJSON(object: any): _74.ModuleSchemaDescriptor;
                toJSON(message: _74.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_74.ModuleSchemaDescriptor>): _74.ModuleSchemaDescriptor;
                fromAmino(object: _74.ModuleSchemaDescriptorAmino): _74.ModuleSchemaDescriptor;
                toAmino(message: _74.ModuleSchemaDescriptor): _74.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _74.ModuleSchemaDescriptorAminoMsg): _74.ModuleSchemaDescriptor;
                toAminoMsg(message: _74.ModuleSchemaDescriptor): _74.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _74.ModuleSchemaDescriptorProtoMsg): _74.ModuleSchemaDescriptor;
                toProto(message: _74.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _74.ModuleSchemaDescriptor): _74.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _74.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _74.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _74.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_74.ModuleSchemaDescriptor_FileEntry>): _74.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _74.ModuleSchemaDescriptor_FileEntryAmino): _74.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _74.ModuleSchemaDescriptor_FileEntry): _74.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _74.ModuleSchemaDescriptor_FileEntryAminoMsg): _74.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _74.ModuleSchemaDescriptor_FileEntry): _74.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _74.ModuleSchemaDescriptor_FileEntryProtoMsg): _74.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _74.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _74.ModuleSchemaDescriptor_FileEntry): _74.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                subspaces(request?: _76.QuerySubspacesRequest): Promise<_76.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsRequest;
                fromJSON(object: any): _76.QueryParamsRequest;
                toJSON(message: _76.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                fromAmino(object: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(message: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsResponse;
                fromJSON(object: any): _76.QueryParamsResponse;
                toJSON(message: _76.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _76.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QuerySubspacesRequest;
                fromJSON(_: any): _76.QuerySubspacesRequest;
                toJSON(_: _76.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_76.QuerySubspacesRequest>): _76.QuerySubspacesRequest;
                fromAmino(_: _76.QuerySubspacesRequestAmino): _76.QuerySubspacesRequest;
                toAmino(_: _76.QuerySubspacesRequest): _76.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _76.QuerySubspacesRequestAminoMsg): _76.QuerySubspacesRequest;
                toAminoMsg(message: _76.QuerySubspacesRequest): _76.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _76.QuerySubspacesRequestProtoMsg): _76.QuerySubspacesRequest;
                toProto(message: _76.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _76.QuerySubspacesRequest): _76.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _76.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QuerySubspacesResponse;
                fromJSON(object: any): _76.QuerySubspacesResponse;
                toJSON(message: _76.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_76.QuerySubspacesResponse>): _76.QuerySubspacesResponse;
                fromAmino(object: _76.QuerySubspacesResponseAmino): _76.QuerySubspacesResponse;
                toAmino(message: _76.QuerySubspacesResponse): _76.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _76.QuerySubspacesResponseAminoMsg): _76.QuerySubspacesResponse;
                toAminoMsg(message: _76.QuerySubspacesResponse): _76.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _76.QuerySubspacesResponseProtoMsg): _76.QuerySubspacesResponse;
                toProto(message: _76.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _76.QuerySubspacesResponse): _76.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _76.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Subspace;
                fromJSON(object: any): _76.Subspace;
                toJSON(message: _76.Subspace): unknown;
                fromPartial(object: Partial<_76.Subspace>): _76.Subspace;
                fromAmino(object: _76.SubspaceAmino): _76.Subspace;
                toAmino(message: _76.Subspace): _76.SubspaceAmino;
                fromAminoMsg(object: _76.SubspaceAminoMsg): _76.Subspace;
                toAminoMsg(message: _76.Subspace): _76.SubspaceAminoMsg;
                fromProtoMsg(message: _76.SubspaceProtoMsg): _76.Subspace;
                toProto(message: _76.Subspace): Uint8Array;
                toProtoMsg(message: _76.Subspace): _76.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _75.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ParameterChangeProposal;
                fromJSON(object: any): _75.ParameterChangeProposal;
                toJSON(message: _75.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_75.ParameterChangeProposal>): _75.ParameterChangeProposal;
                fromAmino(object: _75.ParameterChangeProposalAmino): _75.ParameterChangeProposal;
                toAmino(message: _75.ParameterChangeProposal): _75.ParameterChangeProposalAmino;
                fromAminoMsg(object: _75.ParameterChangeProposalAminoMsg): _75.ParameterChangeProposal;
                toAminoMsg(message: _75.ParameterChangeProposal): _75.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _75.ParameterChangeProposalProtoMsg): _75.ParameterChangeProposal;
                toProto(message: _75.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _75.ParameterChangeProposal): _75.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _75.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ParamChange;
                fromJSON(object: any): _75.ParamChange;
                toJSON(message: _75.ParamChange): unknown;
                fromPartial(object: Partial<_75.ParamChange>): _75.ParamChange;
                fromAmino(object: _75.ParamChangeAmino): _75.ParamChange;
                toAmino(message: _75.ParamChange): _75.ParamChangeAmino;
                fromAminoMsg(object: _75.ParamChangeAminoMsg): _75.ParamChange;
                toAminoMsg(message: _75.ParamChange): _75.ParamChangeAminoMsg;
                fromProtoMsg(message: _75.ParamChangeProtoMsg): _75.ParamChange;
                toProto(message: _75.ParamChange): Uint8Array;
                toProtoMsg(message: _75.ParamChange): _75.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                signingInfo(request: _78.QuerySigningInfoRequest): Promise<_78.QuerySigningInfoResponse>;
                signingInfos(request?: _78.QuerySigningInfosRequest): Promise<_78.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: _80.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _80.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _80.MsgUnjail): {
                        typeUrl: string;
                        value: _80.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _80.MsgUnjail) => _80.MsgUnjailAmino;
                    fromAmino: (object: _80.MsgUnjailAmino) => _80.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _80.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUnjail;
                fromJSON(object: any): _80.MsgUnjail;
                toJSON(message: _80.MsgUnjail): unknown;
                fromPartial(object: Partial<_80.MsgUnjail>): _80.MsgUnjail;
                fromAmino(object: _80.MsgUnjailAmino): _80.MsgUnjail;
                toAmino(message: _80.MsgUnjail): _80.MsgUnjailAmino;
                fromAminoMsg(object: _80.MsgUnjailAminoMsg): _80.MsgUnjail;
                toAminoMsg(message: _80.MsgUnjail): _80.MsgUnjailAminoMsg;
                fromProtoMsg(message: _80.MsgUnjailProtoMsg): _80.MsgUnjail;
                toProto(message: _80.MsgUnjail): Uint8Array;
                toProtoMsg(message: _80.MsgUnjail): _80.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _80.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUnjailResponse;
                fromJSON(_: any): _80.MsgUnjailResponse;
                toJSON(_: _80.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_80.MsgUnjailResponse>): _80.MsgUnjailResponse;
                fromAmino(_: _80.MsgUnjailResponseAmino): _80.MsgUnjailResponse;
                toAmino(_: _80.MsgUnjailResponse): _80.MsgUnjailResponseAmino;
                fromAminoMsg(object: _80.MsgUnjailResponseAminoMsg): _80.MsgUnjailResponse;
                toAminoMsg(message: _80.MsgUnjailResponse): _80.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _80.MsgUnjailResponseProtoMsg): _80.MsgUnjailResponse;
                toProto(message: _80.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _80.MsgUnjailResponse): _80.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _79.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ValidatorSigningInfo;
                fromJSON(object: any): _79.ValidatorSigningInfo;
                toJSON(message: _79.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_79.ValidatorSigningInfo>): _79.ValidatorSigningInfo;
                fromAmino(object: _79.ValidatorSigningInfoAmino): _79.ValidatorSigningInfo;
                toAmino(message: _79.ValidatorSigningInfo): _79.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _79.ValidatorSigningInfoAminoMsg): _79.ValidatorSigningInfo;
                toAminoMsg(message: _79.ValidatorSigningInfo): _79.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _79.ValidatorSigningInfoProtoMsg): _79.ValidatorSigningInfo;
                toProto(message: _79.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _79.ValidatorSigningInfo): _79.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromJSON(object: any): _79.Params;
                toJSON(message: _79.Params): unknown;
                fromPartial(object: Partial<_79.Params>): _79.Params;
                fromAmino(object: _79.ParamsAmino): _79.Params;
                toAmino(message: _79.Params): _79.ParamsAmino;
                fromAminoMsg(object: _79.ParamsAminoMsg): _79.Params;
                toAminoMsg(message: _79.Params): _79.ParamsAminoMsg;
                fromProtoMsg(message: _79.ParamsProtoMsg): _79.Params;
                toProto(message: _79.Params): Uint8Array;
                toProtoMsg(message: _79.Params): _79.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsRequest;
                fromJSON(_: any): _78.QueryParamsRequest;
                toJSON(_: _78.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
                fromAmino(_: _78.QueryParamsRequestAmino): _78.QueryParamsRequest;
                toAmino(_: _78.QueryParamsRequest): _78.QueryParamsRequestAmino;
                fromAminoMsg(object: _78.QueryParamsRequestAminoMsg): _78.QueryParamsRequest;
                toAminoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryParamsRequestProtoMsg): _78.QueryParamsRequest;
                toProto(message: _78.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsResponse;
                fromJSON(object: any): _78.QueryParamsResponse;
                toJSON(message: _78.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
                fromAmino(object: _78.QueryParamsResponseAmino): _78.QueryParamsResponse;
                toAmino(message: _78.QueryParamsResponse): _78.QueryParamsResponseAmino;
                fromAminoMsg(object: _78.QueryParamsResponseAminoMsg): _78.QueryParamsResponse;
                toAminoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryParamsResponseProtoMsg): _78.QueryParamsResponse;
                toProto(message: _78.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _78.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfoRequest;
                fromJSON(object: any): _78.QuerySigningInfoRequest;
                toJSON(message: _78.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_78.QuerySigningInfoRequest>): _78.QuerySigningInfoRequest;
                fromAmino(object: _78.QuerySigningInfoRequestAmino): _78.QuerySigningInfoRequest;
                toAmino(message: _78.QuerySigningInfoRequest): _78.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _78.QuerySigningInfoRequestAminoMsg): _78.QuerySigningInfoRequest;
                toAminoMsg(message: _78.QuerySigningInfoRequest): _78.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _78.QuerySigningInfoRequestProtoMsg): _78.QuerySigningInfoRequest;
                toProto(message: _78.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _78.QuerySigningInfoRequest): _78.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _78.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfoResponse;
                fromJSON(object: any): _78.QuerySigningInfoResponse;
                toJSON(message: _78.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_78.QuerySigningInfoResponse>): _78.QuerySigningInfoResponse;
                fromAmino(object: _78.QuerySigningInfoResponseAmino): _78.QuerySigningInfoResponse;
                toAmino(message: _78.QuerySigningInfoResponse): _78.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _78.QuerySigningInfoResponseAminoMsg): _78.QuerySigningInfoResponse;
                toAminoMsg(message: _78.QuerySigningInfoResponse): _78.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _78.QuerySigningInfoResponseProtoMsg): _78.QuerySigningInfoResponse;
                toProto(message: _78.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _78.QuerySigningInfoResponse): _78.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _78.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfosRequest;
                fromJSON(object: any): _78.QuerySigningInfosRequest;
                toJSON(message: _78.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_78.QuerySigningInfosRequest>): _78.QuerySigningInfosRequest;
                fromAmino(object: _78.QuerySigningInfosRequestAmino): _78.QuerySigningInfosRequest;
                toAmino(message: _78.QuerySigningInfosRequest): _78.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _78.QuerySigningInfosRequestAminoMsg): _78.QuerySigningInfosRequest;
                toAminoMsg(message: _78.QuerySigningInfosRequest): _78.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _78.QuerySigningInfosRequestProtoMsg): _78.QuerySigningInfosRequest;
                toProto(message: _78.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _78.QuerySigningInfosRequest): _78.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _78.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QuerySigningInfosResponse;
                fromJSON(object: any): _78.QuerySigningInfosResponse;
                toJSON(message: _78.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_78.QuerySigningInfosResponse>): _78.QuerySigningInfosResponse;
                fromAmino(object: _78.QuerySigningInfosResponseAmino): _78.QuerySigningInfosResponse;
                toAmino(message: _78.QuerySigningInfosResponse): _78.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _78.QuerySigningInfosResponseAminoMsg): _78.QuerySigningInfosResponse;
                toAminoMsg(message: _78.QuerySigningInfosResponse): _78.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _78.QuerySigningInfosResponseProtoMsg): _78.QuerySigningInfosResponse;
                toProto(message: _78.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _78.QuerySigningInfosResponse): _78.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _77.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SigningInfo;
                fromJSON(object: any): _77.SigningInfo;
                toJSON(message: _77.SigningInfo): unknown;
                fromPartial(object: Partial<_77.SigningInfo>): _77.SigningInfo;
                fromAmino(object: _77.SigningInfoAmino): _77.SigningInfo;
                toAmino(message: _77.SigningInfo): _77.SigningInfoAmino;
                fromAminoMsg(object: _77.SigningInfoAminoMsg): _77.SigningInfo;
                toAminoMsg(message: _77.SigningInfo): _77.SigningInfoAminoMsg;
                fromProtoMsg(message: _77.SigningInfoProtoMsg): _77.SigningInfo;
                toProto(message: _77.SigningInfo): Uint8Array;
                toProtoMsg(message: _77.SigningInfo): _77.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _77.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ValidatorMissedBlocks;
                fromJSON(object: any): _77.ValidatorMissedBlocks;
                toJSON(message: _77.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_77.ValidatorMissedBlocks>): _77.ValidatorMissedBlocks;
                fromAmino(object: _77.ValidatorMissedBlocksAmino): _77.ValidatorMissedBlocks;
                toAmino(message: _77.ValidatorMissedBlocks): _77.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _77.ValidatorMissedBlocksAminoMsg): _77.ValidatorMissedBlocks;
                toAminoMsg(message: _77.ValidatorMissedBlocks): _77.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _77.ValidatorMissedBlocksProtoMsg): _77.ValidatorMissedBlocks;
                toProto(message: _77.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _77.ValidatorMissedBlocks): _77.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _77.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MissedBlock;
                fromJSON(object: any): _77.MissedBlock;
                toJSON(message: _77.MissedBlock): unknown;
                fromPartial(object: Partial<_77.MissedBlock>): _77.MissedBlock;
                fromAmino(object: _77.MissedBlockAmino): _77.MissedBlock;
                toAmino(message: _77.MissedBlock): _77.MissedBlockAmino;
                fromAminoMsg(object: _77.MissedBlockAminoMsg): _77.MissedBlock;
                toAminoMsg(message: _77.MissedBlock): _77.MissedBlockAminoMsg;
                fromProtoMsg(message: _77.MissedBlockProtoMsg): _77.MissedBlock;
                toProto(message: _77.MissedBlock): Uint8Array;
                toProtoMsg(message: _77.MissedBlock): _77.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _83.QueryValidatorsRequest): Promise<_83.QueryValidatorsResponse>;
                validator(request: _83.QueryValidatorRequest): Promise<_83.QueryValidatorResponse>;
                validatorDelegations(request: _83.QueryValidatorDelegationsRequest): Promise<_83.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _83.QueryValidatorUnbondingDelegationsRequest): Promise<_83.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _83.QueryDelegationRequest): Promise<_83.QueryDelegationResponse>;
                unbondingDelegation(request: _83.QueryUnbondingDelegationRequest): Promise<_83.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _83.QueryDelegatorDelegationsRequest): Promise<_83.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _83.QueryDelegatorUnbondingDelegationsRequest): Promise<_83.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _83.QueryRedelegationsRequest): Promise<_83.QueryRedelegationsResponse>;
                delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _83.QueryDelegatorValidatorRequest): Promise<_83.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _83.QueryHistoricalInfoRequest): Promise<_83.QueryHistoricalInfoResponse>;
                pool(request?: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _85.MsgCreateValidator): {
                        typeUrl: string;
                        value: _85.MsgCreateValidator;
                    };
                    editValidator(value: _85.MsgEditValidator): {
                        typeUrl: string;
                        value: _85.MsgEditValidator;
                    };
                    delegate(value: _85.MsgDelegate): {
                        typeUrl: string;
                        value: _85.MsgDelegate;
                    };
                    beginRedelegate(value: _85.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _85.MsgBeginRedelegate;
                    };
                    undelegate(value: _85.MsgUndelegate): {
                        typeUrl: string;
                        value: _85.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _85.MsgCreateValidator) => _85.MsgCreateValidatorAmino;
                    fromAmino: (object: _85.MsgCreateValidatorAmino) => _85.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _85.MsgEditValidator) => _85.MsgEditValidatorAmino;
                    fromAmino: (object: _85.MsgEditValidatorAmino) => _85.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _85.MsgDelegate) => _85.MsgDelegateAmino;
                    fromAmino: (object: _85.MsgDelegateAmino) => _85.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _85.MsgBeginRedelegate) => _85.MsgBeginRedelegateAmino;
                    fromAmino: (object: _85.MsgBeginRedelegateAmino) => _85.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _85.MsgUndelegate) => _85.MsgUndelegateAmino;
                    fromAmino: (object: _85.MsgUndelegateAmino) => _85.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _85.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateValidator;
                fromJSON(object: any): _85.MsgCreateValidator;
                toJSON(message: _85.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_85.MsgCreateValidator>): _85.MsgCreateValidator;
                fromAmino(object: _85.MsgCreateValidatorAmino): _85.MsgCreateValidator;
                toAmino(message: _85.MsgCreateValidator): _85.MsgCreateValidatorAmino;
                fromAminoMsg(object: _85.MsgCreateValidatorAminoMsg): _85.MsgCreateValidator;
                toAminoMsg(message: _85.MsgCreateValidator): _85.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _85.MsgCreateValidatorProtoMsg): _85.MsgCreateValidator;
                toProto(message: _85.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _85.MsgCreateValidator): _85.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _85.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateValidatorResponse;
                fromJSON(_: any): _85.MsgCreateValidatorResponse;
                toJSON(_: _85.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_85.MsgCreateValidatorResponse>): _85.MsgCreateValidatorResponse;
                fromAmino(_: _85.MsgCreateValidatorResponseAmino): _85.MsgCreateValidatorResponse;
                toAmino(_: _85.MsgCreateValidatorResponse): _85.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _85.MsgCreateValidatorResponseAminoMsg): _85.MsgCreateValidatorResponse;
                toAminoMsg(message: _85.MsgCreateValidatorResponse): _85.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _85.MsgCreateValidatorResponseProtoMsg): _85.MsgCreateValidatorResponse;
                toProto(message: _85.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _85.MsgCreateValidatorResponse): _85.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _85.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgEditValidator;
                fromJSON(object: any): _85.MsgEditValidator;
                toJSON(message: _85.MsgEditValidator): unknown;
                fromPartial(object: Partial<_85.MsgEditValidator>): _85.MsgEditValidator;
                fromAmino(object: _85.MsgEditValidatorAmino): _85.MsgEditValidator;
                toAmino(message: _85.MsgEditValidator): _85.MsgEditValidatorAmino;
                fromAminoMsg(object: _85.MsgEditValidatorAminoMsg): _85.MsgEditValidator;
                toAminoMsg(message: _85.MsgEditValidator): _85.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _85.MsgEditValidatorProtoMsg): _85.MsgEditValidator;
                toProto(message: _85.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _85.MsgEditValidator): _85.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _85.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgEditValidatorResponse;
                fromJSON(_: any): _85.MsgEditValidatorResponse;
                toJSON(_: _85.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_85.MsgEditValidatorResponse>): _85.MsgEditValidatorResponse;
                fromAmino(_: _85.MsgEditValidatorResponseAmino): _85.MsgEditValidatorResponse;
                toAmino(_: _85.MsgEditValidatorResponse): _85.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _85.MsgEditValidatorResponseAminoMsg): _85.MsgEditValidatorResponse;
                toAminoMsg(message: _85.MsgEditValidatorResponse): _85.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _85.MsgEditValidatorResponseProtoMsg): _85.MsgEditValidatorResponse;
                toProto(message: _85.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _85.MsgEditValidatorResponse): _85.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _85.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgDelegate;
                fromJSON(object: any): _85.MsgDelegate;
                toJSON(message: _85.MsgDelegate): unknown;
                fromPartial(object: Partial<_85.MsgDelegate>): _85.MsgDelegate;
                fromAmino(object: _85.MsgDelegateAmino): _85.MsgDelegate;
                toAmino(message: _85.MsgDelegate): _85.MsgDelegateAmino;
                fromAminoMsg(object: _85.MsgDelegateAminoMsg): _85.MsgDelegate;
                toAminoMsg(message: _85.MsgDelegate): _85.MsgDelegateAminoMsg;
                fromProtoMsg(message: _85.MsgDelegateProtoMsg): _85.MsgDelegate;
                toProto(message: _85.MsgDelegate): Uint8Array;
                toProtoMsg(message: _85.MsgDelegate): _85.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _85.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgDelegateResponse;
                fromJSON(_: any): _85.MsgDelegateResponse;
                toJSON(_: _85.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_85.MsgDelegateResponse>): _85.MsgDelegateResponse;
                fromAmino(_: _85.MsgDelegateResponseAmino): _85.MsgDelegateResponse;
                toAmino(_: _85.MsgDelegateResponse): _85.MsgDelegateResponseAmino;
                fromAminoMsg(object: _85.MsgDelegateResponseAminoMsg): _85.MsgDelegateResponse;
                toAminoMsg(message: _85.MsgDelegateResponse): _85.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _85.MsgDelegateResponseProtoMsg): _85.MsgDelegateResponse;
                toProto(message: _85.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _85.MsgDelegateResponse): _85.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _85.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgBeginRedelegate;
                fromJSON(object: any): _85.MsgBeginRedelegate;
                toJSON(message: _85.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_85.MsgBeginRedelegate>): _85.MsgBeginRedelegate;
                fromAmino(object: _85.MsgBeginRedelegateAmino): _85.MsgBeginRedelegate;
                toAmino(message: _85.MsgBeginRedelegate): _85.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _85.MsgBeginRedelegateAminoMsg): _85.MsgBeginRedelegate;
                toAminoMsg(message: _85.MsgBeginRedelegate): _85.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _85.MsgBeginRedelegateProtoMsg): _85.MsgBeginRedelegate;
                toProto(message: _85.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _85.MsgBeginRedelegate): _85.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _85.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgBeginRedelegateResponse;
                fromJSON(object: any): _85.MsgBeginRedelegateResponse;
                toJSON(message: _85.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_85.MsgBeginRedelegateResponse>): _85.MsgBeginRedelegateResponse;
                fromAmino(object: _85.MsgBeginRedelegateResponseAmino): _85.MsgBeginRedelegateResponse;
                toAmino(message: _85.MsgBeginRedelegateResponse): _85.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _85.MsgBeginRedelegateResponseAminoMsg): _85.MsgBeginRedelegateResponse;
                toAminoMsg(message: _85.MsgBeginRedelegateResponse): _85.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _85.MsgBeginRedelegateResponseProtoMsg): _85.MsgBeginRedelegateResponse;
                toProto(message: _85.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _85.MsgBeginRedelegateResponse): _85.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _85.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUndelegate;
                fromJSON(object: any): _85.MsgUndelegate;
                toJSON(message: _85.MsgUndelegate): unknown;
                fromPartial(object: Partial<_85.MsgUndelegate>): _85.MsgUndelegate;
                fromAmino(object: _85.MsgUndelegateAmino): _85.MsgUndelegate;
                toAmino(message: _85.MsgUndelegate): _85.MsgUndelegateAmino;
                fromAminoMsg(object: _85.MsgUndelegateAminoMsg): _85.MsgUndelegate;
                toAminoMsg(message: _85.MsgUndelegate): _85.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _85.MsgUndelegateProtoMsg): _85.MsgUndelegate;
                toProto(message: _85.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _85.MsgUndelegate): _85.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _85.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUndelegateResponse;
                fromJSON(object: any): _85.MsgUndelegateResponse;
                toJSON(message: _85.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_85.MsgUndelegateResponse>): _85.MsgUndelegateResponse;
                fromAmino(object: _85.MsgUndelegateResponseAmino): _85.MsgUndelegateResponse;
                toAmino(message: _85.MsgUndelegateResponse): _85.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _85.MsgUndelegateResponseAminoMsg): _85.MsgUndelegateResponse;
                toAminoMsg(message: _85.MsgUndelegateResponse): _85.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _85.MsgUndelegateResponseProtoMsg): _85.MsgUndelegateResponse;
                toProto(message: _85.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _85.MsgUndelegateResponse): _85.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _84.BondStatus;
            bondStatusToJSON(object: _84.BondStatus): string;
            BondStatus: typeof _84.BondStatus;
            BondStatusSDKType: typeof _84.BondStatus;
            BondStatusAmino: typeof _84.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _84.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.HistoricalInfo;
                fromJSON(object: any): _84.HistoricalInfo;
                toJSON(message: _84.HistoricalInfo): unknown;
                fromPartial(object: Partial<_84.HistoricalInfo>): _84.HistoricalInfo;
                fromAmino(object: _84.HistoricalInfoAmino): _84.HistoricalInfo;
                toAmino(message: _84.HistoricalInfo): _84.HistoricalInfoAmino;
                fromAminoMsg(object: _84.HistoricalInfoAminoMsg): _84.HistoricalInfo;
                toAminoMsg(message: _84.HistoricalInfo): _84.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _84.HistoricalInfoProtoMsg): _84.HistoricalInfo;
                toProto(message: _84.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _84.HistoricalInfo): _84.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _84.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.CommissionRates;
                fromJSON(object: any): _84.CommissionRates;
                toJSON(message: _84.CommissionRates): unknown;
                fromPartial(object: Partial<_84.CommissionRates>): _84.CommissionRates;
                fromAmino(object: _84.CommissionRatesAmino): _84.CommissionRates;
                toAmino(message: _84.CommissionRates): _84.CommissionRatesAmino;
                fromAminoMsg(object: _84.CommissionRatesAminoMsg): _84.CommissionRates;
                toAminoMsg(message: _84.CommissionRates): _84.CommissionRatesAminoMsg;
                fromProtoMsg(message: _84.CommissionRatesProtoMsg): _84.CommissionRates;
                toProto(message: _84.CommissionRates): Uint8Array;
                toProtoMsg(message: _84.CommissionRates): _84.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _84.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Commission;
                fromJSON(object: any): _84.Commission;
                toJSON(message: _84.Commission): unknown;
                fromPartial(object: Partial<_84.Commission>): _84.Commission;
                fromAmino(object: _84.CommissionAmino): _84.Commission;
                toAmino(message: _84.Commission): _84.CommissionAmino;
                fromAminoMsg(object: _84.CommissionAminoMsg): _84.Commission;
                toAminoMsg(message: _84.Commission): _84.CommissionAminoMsg;
                fromProtoMsg(message: _84.CommissionProtoMsg): _84.Commission;
                toProto(message: _84.Commission): Uint8Array;
                toProtoMsg(message: _84.Commission): _84.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _84.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Description;
                fromJSON(object: any): _84.Description;
                toJSON(message: _84.Description): unknown;
                fromPartial(object: Partial<_84.Description>): _84.Description;
                fromAmino(object: _84.DescriptionAmino): _84.Description;
                toAmino(message: _84.Description): _84.DescriptionAmino;
                fromAminoMsg(object: _84.DescriptionAminoMsg): _84.Description;
                toAminoMsg(message: _84.Description): _84.DescriptionAminoMsg;
                fromProtoMsg(message: _84.DescriptionProtoMsg): _84.Description;
                toProto(message: _84.Description): Uint8Array;
                toProtoMsg(message: _84.Description): _84.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _84.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Validator;
                fromJSON(object: any): _84.Validator;
                toJSON(message: _84.Validator): unknown;
                fromPartial(object: Partial<_84.Validator>): _84.Validator;
                fromAmino(object: _84.ValidatorAmino): _84.Validator;
                toAmino(message: _84.Validator): _84.ValidatorAmino;
                fromAminoMsg(object: _84.ValidatorAminoMsg): _84.Validator;
                toAminoMsg(message: _84.Validator): _84.ValidatorAminoMsg;
                fromProtoMsg(message: _84.ValidatorProtoMsg): _84.Validator;
                toProto(message: _84.Validator): Uint8Array;
                toProtoMsg(message: _84.Validator): _84.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _84.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValAddresses;
                fromJSON(object: any): _84.ValAddresses;
                toJSON(message: _84.ValAddresses): unknown;
                fromPartial(object: Partial<_84.ValAddresses>): _84.ValAddresses;
                fromAmino(object: _84.ValAddressesAmino): _84.ValAddresses;
                toAmino(message: _84.ValAddresses): _84.ValAddressesAmino;
                fromAminoMsg(object: _84.ValAddressesAminoMsg): _84.ValAddresses;
                toAminoMsg(message: _84.ValAddresses): _84.ValAddressesAminoMsg;
                fromProtoMsg(message: _84.ValAddressesProtoMsg): _84.ValAddresses;
                toProto(message: _84.ValAddresses): Uint8Array;
                toProtoMsg(message: _84.ValAddresses): _84.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _84.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVPair;
                fromJSON(object: any): _84.DVPair;
                toJSON(message: _84.DVPair): unknown;
                fromPartial(object: Partial<_84.DVPair>): _84.DVPair;
                fromAmino(object: _84.DVPairAmino): _84.DVPair;
                toAmino(message: _84.DVPair): _84.DVPairAmino;
                fromAminoMsg(object: _84.DVPairAminoMsg): _84.DVPair;
                toAminoMsg(message: _84.DVPair): _84.DVPairAminoMsg;
                fromProtoMsg(message: _84.DVPairProtoMsg): _84.DVPair;
                toProto(message: _84.DVPair): Uint8Array;
                toProtoMsg(message: _84.DVPair): _84.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _84.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVPairs;
                fromJSON(object: any): _84.DVPairs;
                toJSON(message: _84.DVPairs): unknown;
                fromPartial(object: Partial<_84.DVPairs>): _84.DVPairs;
                fromAmino(object: _84.DVPairsAmino): _84.DVPairs;
                toAmino(message: _84.DVPairs): _84.DVPairsAmino;
                fromAminoMsg(object: _84.DVPairsAminoMsg): _84.DVPairs;
                toAminoMsg(message: _84.DVPairs): _84.DVPairsAminoMsg;
                fromProtoMsg(message: _84.DVPairsProtoMsg): _84.DVPairs;
                toProto(message: _84.DVPairs): Uint8Array;
                toProtoMsg(message: _84.DVPairs): _84.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _84.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVVTriplet;
                fromJSON(object: any): _84.DVVTriplet;
                toJSON(message: _84.DVVTriplet): unknown;
                fromPartial(object: Partial<_84.DVVTriplet>): _84.DVVTriplet;
                fromAmino(object: _84.DVVTripletAmino): _84.DVVTriplet;
                toAmino(message: _84.DVVTriplet): _84.DVVTripletAmino;
                fromAminoMsg(object: _84.DVVTripletAminoMsg): _84.DVVTriplet;
                toAminoMsg(message: _84.DVVTriplet): _84.DVVTripletAminoMsg;
                fromProtoMsg(message: _84.DVVTripletProtoMsg): _84.DVVTriplet;
                toProto(message: _84.DVVTriplet): Uint8Array;
                toProtoMsg(message: _84.DVVTriplet): _84.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _84.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DVVTriplets;
                fromJSON(object: any): _84.DVVTriplets;
                toJSON(message: _84.DVVTriplets): unknown;
                fromPartial(object: Partial<_84.DVVTriplets>): _84.DVVTriplets;
                fromAmino(object: _84.DVVTripletsAmino): _84.DVVTriplets;
                toAmino(message: _84.DVVTriplets): _84.DVVTripletsAmino;
                fromAminoMsg(object: _84.DVVTripletsAminoMsg): _84.DVVTriplets;
                toAminoMsg(message: _84.DVVTriplets): _84.DVVTripletsAminoMsg;
                fromProtoMsg(message: _84.DVVTripletsProtoMsg): _84.DVVTriplets;
                toProto(message: _84.DVVTriplets): Uint8Array;
                toProtoMsg(message: _84.DVVTriplets): _84.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _84.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Delegation;
                fromJSON(object: any): _84.Delegation;
                toJSON(message: _84.Delegation): unknown;
                fromPartial(object: Partial<_84.Delegation>): _84.Delegation;
                fromAmino(object: _84.DelegationAmino): _84.Delegation;
                toAmino(message: _84.Delegation): _84.DelegationAmino;
                fromAminoMsg(object: _84.DelegationAminoMsg): _84.Delegation;
                toAminoMsg(message: _84.Delegation): _84.DelegationAminoMsg;
                fromProtoMsg(message: _84.DelegationProtoMsg): _84.Delegation;
                toProto(message: _84.Delegation): Uint8Array;
                toProtoMsg(message: _84.Delegation): _84.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _84.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.UnbondingDelegation;
                fromJSON(object: any): _84.UnbondingDelegation;
                toJSON(message: _84.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_84.UnbondingDelegation>): _84.UnbondingDelegation;
                fromAmino(object: _84.UnbondingDelegationAmino): _84.UnbondingDelegation;
                toAmino(message: _84.UnbondingDelegation): _84.UnbondingDelegationAmino;
                fromAminoMsg(object: _84.UnbondingDelegationAminoMsg): _84.UnbondingDelegation;
                toAminoMsg(message: _84.UnbondingDelegation): _84.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _84.UnbondingDelegationProtoMsg): _84.UnbondingDelegation;
                toProto(message: _84.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _84.UnbondingDelegation): _84.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _84.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.UnbondingDelegationEntry;
                fromJSON(object: any): _84.UnbondingDelegationEntry;
                toJSON(message: _84.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_84.UnbondingDelegationEntry>): _84.UnbondingDelegationEntry;
                fromAmino(object: _84.UnbondingDelegationEntryAmino): _84.UnbondingDelegationEntry;
                toAmino(message: _84.UnbondingDelegationEntry): _84.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _84.UnbondingDelegationEntryAminoMsg): _84.UnbondingDelegationEntry;
                toAminoMsg(message: _84.UnbondingDelegationEntry): _84.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _84.UnbondingDelegationEntryProtoMsg): _84.UnbondingDelegationEntry;
                toProto(message: _84.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _84.UnbondingDelegationEntry): _84.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _84.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationEntry;
                fromJSON(object: any): _84.RedelegationEntry;
                toJSON(message: _84.RedelegationEntry): unknown;
                fromPartial(object: Partial<_84.RedelegationEntry>): _84.RedelegationEntry;
                fromAmino(object: _84.RedelegationEntryAmino): _84.RedelegationEntry;
                toAmino(message: _84.RedelegationEntry): _84.RedelegationEntryAmino;
                fromAminoMsg(object: _84.RedelegationEntryAminoMsg): _84.RedelegationEntry;
                toAminoMsg(message: _84.RedelegationEntry): _84.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _84.RedelegationEntryProtoMsg): _84.RedelegationEntry;
                toProto(message: _84.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _84.RedelegationEntry): _84.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _84.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Redelegation;
                fromJSON(object: any): _84.Redelegation;
                toJSON(message: _84.Redelegation): unknown;
                fromPartial(object: Partial<_84.Redelegation>): _84.Redelegation;
                fromAmino(object: _84.RedelegationAmino): _84.Redelegation;
                toAmino(message: _84.Redelegation): _84.RedelegationAmino;
                fromAminoMsg(object: _84.RedelegationAminoMsg): _84.Redelegation;
                toAminoMsg(message: _84.Redelegation): _84.RedelegationAminoMsg;
                fromProtoMsg(message: _84.RedelegationProtoMsg): _84.Redelegation;
                toProto(message: _84.Redelegation): Uint8Array;
                toProtoMsg(message: _84.Redelegation): _84.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromJSON(object: any): _84.Params;
                toJSON(message: _84.Params): unknown;
                fromPartial(object: Partial<_84.Params>): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                toAminoMsg(message: _84.Params): _84.ParamsAminoMsg;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _84.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DelegationResponse;
                fromJSON(object: any): _84.DelegationResponse;
                toJSON(message: _84.DelegationResponse): unknown;
                fromPartial(object: Partial<_84.DelegationResponse>): _84.DelegationResponse;
                fromAmino(object: _84.DelegationResponseAmino): _84.DelegationResponse;
                toAmino(message: _84.DelegationResponse): _84.DelegationResponseAmino;
                fromAminoMsg(object: _84.DelegationResponseAminoMsg): _84.DelegationResponse;
                toAminoMsg(message: _84.DelegationResponse): _84.DelegationResponseAminoMsg;
                fromProtoMsg(message: _84.DelegationResponseProtoMsg): _84.DelegationResponse;
                toProto(message: _84.DelegationResponse): Uint8Array;
                toProtoMsg(message: _84.DelegationResponse): _84.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _84.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationEntryResponse;
                fromJSON(object: any): _84.RedelegationEntryResponse;
                toJSON(message: _84.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_84.RedelegationEntryResponse>): _84.RedelegationEntryResponse;
                fromAmino(object: _84.RedelegationEntryResponseAmino): _84.RedelegationEntryResponse;
                toAmino(message: _84.RedelegationEntryResponse): _84.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _84.RedelegationEntryResponseAminoMsg): _84.RedelegationEntryResponse;
                toAminoMsg(message: _84.RedelegationEntryResponse): _84.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _84.RedelegationEntryResponseProtoMsg): _84.RedelegationEntryResponse;
                toProto(message: _84.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _84.RedelegationEntryResponse): _84.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _84.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.RedelegationResponse;
                fromJSON(object: any): _84.RedelegationResponse;
                toJSON(message: _84.RedelegationResponse): unknown;
                fromPartial(object: Partial<_84.RedelegationResponse>): _84.RedelegationResponse;
                fromAmino(object: _84.RedelegationResponseAmino): _84.RedelegationResponse;
                toAmino(message: _84.RedelegationResponse): _84.RedelegationResponseAmino;
                fromAminoMsg(object: _84.RedelegationResponseAminoMsg): _84.RedelegationResponse;
                toAminoMsg(message: _84.RedelegationResponse): _84.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _84.RedelegationResponseProtoMsg): _84.RedelegationResponse;
                toProto(message: _84.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _84.RedelegationResponse): _84.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _84.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Pool;
                fromJSON(object: any): _84.Pool;
                toJSON(message: _84.Pool): unknown;
                fromPartial(object: Partial<_84.Pool>): _84.Pool;
                fromAmino(object: _84.PoolAmino): _84.Pool;
                toAmino(message: _84.Pool): _84.PoolAmino;
                fromAminoMsg(object: _84.PoolAminoMsg): _84.Pool;
                toAminoMsg(message: _84.Pool): _84.PoolAminoMsg;
                fromProtoMsg(message: _84.PoolProtoMsg): _84.Pool;
                toProto(message: _84.Pool): Uint8Array;
                toProtoMsg(message: _84.Pool): _84.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorsRequest;
                fromJSON(object: any): _83.QueryValidatorsRequest;
                toJSON(message: _83.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_83.QueryValidatorsRequest>): _83.QueryValidatorsRequest;
                fromAmino(object: _83.QueryValidatorsRequestAmino): _83.QueryValidatorsRequest;
                toAmino(message: _83.QueryValidatorsRequest): _83.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorsRequestAminoMsg): _83.QueryValidatorsRequest;
                toAminoMsg(message: _83.QueryValidatorsRequest): _83.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorsRequestProtoMsg): _83.QueryValidatorsRequest;
                toProto(message: _83.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorsRequest): _83.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorsResponse;
                fromJSON(object: any): _83.QueryValidatorsResponse;
                toJSON(message: _83.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_83.QueryValidatorsResponse>): _83.QueryValidatorsResponse;
                fromAmino(object: _83.QueryValidatorsResponseAmino): _83.QueryValidatorsResponse;
                toAmino(message: _83.QueryValidatorsResponse): _83.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorsResponseAminoMsg): _83.QueryValidatorsResponse;
                toAminoMsg(message: _83.QueryValidatorsResponse): _83.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorsResponseProtoMsg): _83.QueryValidatorsResponse;
                toProto(message: _83.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorsResponse): _83.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorRequest;
                fromJSON(object: any): _83.QueryValidatorRequest;
                toJSON(message: _83.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_83.QueryValidatorRequest>): _83.QueryValidatorRequest;
                fromAmino(object: _83.QueryValidatorRequestAmino): _83.QueryValidatorRequest;
                toAmino(message: _83.QueryValidatorRequest): _83.QueryValidatorRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorRequestAminoMsg): _83.QueryValidatorRequest;
                toAminoMsg(message: _83.QueryValidatorRequest): _83.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorRequestProtoMsg): _83.QueryValidatorRequest;
                toProto(message: _83.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorRequest): _83.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorResponse;
                fromJSON(object: any): _83.QueryValidatorResponse;
                toJSON(message: _83.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_83.QueryValidatorResponse>): _83.QueryValidatorResponse;
                fromAmino(object: _83.QueryValidatorResponseAmino): _83.QueryValidatorResponse;
                toAmino(message: _83.QueryValidatorResponse): _83.QueryValidatorResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorResponseAminoMsg): _83.QueryValidatorResponse;
                toAminoMsg(message: _83.QueryValidatorResponse): _83.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorResponseProtoMsg): _83.QueryValidatorResponse;
                toProto(message: _83.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorResponse): _83.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _83.QueryValidatorDelegationsRequest;
                toJSON(message: _83.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_83.QueryValidatorDelegationsRequest>): _83.QueryValidatorDelegationsRequest;
                fromAmino(object: _83.QueryValidatorDelegationsRequestAmino): _83.QueryValidatorDelegationsRequest;
                toAmino(message: _83.QueryValidatorDelegationsRequest): _83.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorDelegationsRequestAminoMsg): _83.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _83.QueryValidatorDelegationsRequest): _83.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorDelegationsRequestProtoMsg): _83.QueryValidatorDelegationsRequest;
                toProto(message: _83.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorDelegationsRequest): _83.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _83.QueryValidatorDelegationsResponse;
                toJSON(message: _83.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_83.QueryValidatorDelegationsResponse>): _83.QueryValidatorDelegationsResponse;
                fromAmino(object: _83.QueryValidatorDelegationsResponseAmino): _83.QueryValidatorDelegationsResponse;
                toAmino(message: _83.QueryValidatorDelegationsResponse): _83.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorDelegationsResponseAminoMsg): _83.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _83.QueryValidatorDelegationsResponse): _83.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorDelegationsResponseProtoMsg): _83.QueryValidatorDelegationsResponse;
                toProto(message: _83.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorDelegationsResponse): _83.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _83.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _83.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _83.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_83.QueryValidatorUnbondingDelegationsRequest>): _83.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _83.QueryValidatorUnbondingDelegationsRequestAmino): _83.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _83.QueryValidatorUnbondingDelegationsRequest): _83.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _83.QueryValidatorUnbondingDelegationsRequestAminoMsg): _83.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _83.QueryValidatorUnbondingDelegationsRequest): _83.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorUnbondingDelegationsRequestProtoMsg): _83.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _83.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorUnbondingDelegationsRequest): _83.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _83.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _83.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _83.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_83.QueryValidatorUnbondingDelegationsResponse>): _83.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _83.QueryValidatorUnbondingDelegationsResponseAmino): _83.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _83.QueryValidatorUnbondingDelegationsResponse): _83.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _83.QueryValidatorUnbondingDelegationsResponseAminoMsg): _83.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _83.QueryValidatorUnbondingDelegationsResponse): _83.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryValidatorUnbondingDelegationsResponseProtoMsg): _83.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _83.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryValidatorUnbondingDelegationsResponse): _83.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegationRequest;
                fromJSON(object: any): _83.QueryDelegationRequest;
                toJSON(message: _83.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_83.QueryDelegationRequest>): _83.QueryDelegationRequest;
                fromAmino(object: _83.QueryDelegationRequestAmino): _83.QueryDelegationRequest;
                toAmino(message: _83.QueryDelegationRequest): _83.QueryDelegationRequestAmino;
                fromAminoMsg(object: _83.QueryDelegationRequestAminoMsg): _83.QueryDelegationRequest;
                toAminoMsg(message: _83.QueryDelegationRequest): _83.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationRequestProtoMsg): _83.QueryDelegationRequest;
                toProto(message: _83.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationRequest): _83.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegationResponse;
                fromJSON(object: any): _83.QueryDelegationResponse;
                toJSON(message: _83.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_83.QueryDelegationResponse>): _83.QueryDelegationResponse;
                fromAmino(object: _83.QueryDelegationResponseAmino): _83.QueryDelegationResponse;
                toAmino(message: _83.QueryDelegationResponse): _83.QueryDelegationResponseAmino;
                fromAminoMsg(object: _83.QueryDelegationResponseAminoMsg): _83.QueryDelegationResponse;
                toAminoMsg(message: _83.QueryDelegationResponse): _83.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegationResponseProtoMsg): _83.QueryDelegationResponse;
                toProto(message: _83.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegationResponse): _83.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _83.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _83.QueryUnbondingDelegationRequest;
                toJSON(message: _83.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_83.QueryUnbondingDelegationRequest>): _83.QueryUnbondingDelegationRequest;
                fromAmino(object: _83.QueryUnbondingDelegationRequestAmino): _83.QueryUnbondingDelegationRequest;
                toAmino(message: _83.QueryUnbondingDelegationRequest): _83.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _83.QueryUnbondingDelegationRequestAminoMsg): _83.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _83.QueryUnbondingDelegationRequest): _83.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _83.QueryUnbondingDelegationRequestProtoMsg): _83.QueryUnbondingDelegationRequest;
                toProto(message: _83.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _83.QueryUnbondingDelegationRequest): _83.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _83.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _83.QueryUnbondingDelegationResponse;
                toJSON(message: _83.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_83.QueryUnbondingDelegationResponse>): _83.QueryUnbondingDelegationResponse;
                fromAmino(object: _83.QueryUnbondingDelegationResponseAmino): _83.QueryUnbondingDelegationResponse;
                toAmino(message: _83.QueryUnbondingDelegationResponse): _83.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _83.QueryUnbondingDelegationResponseAminoMsg): _83.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _83.QueryUnbondingDelegationResponse): _83.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _83.QueryUnbondingDelegationResponseProtoMsg): _83.QueryUnbondingDelegationResponse;
                toProto(message: _83.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _83.QueryUnbondingDelegationResponse): _83.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _83.QueryDelegatorDelegationsRequest;
                toJSON(message: _83.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorDelegationsRequest>): _83.QueryDelegatorDelegationsRequest;
                fromAmino(object: _83.QueryDelegatorDelegationsRequestAmino): _83.QueryDelegatorDelegationsRequest;
                toAmino(message: _83.QueryDelegatorDelegationsRequest): _83.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorDelegationsRequestAminoMsg): _83.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _83.QueryDelegatorDelegationsRequest): _83.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorDelegationsRequestProtoMsg): _83.QueryDelegatorDelegationsRequest;
                toProto(message: _83.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorDelegationsRequest): _83.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _83.QueryDelegatorDelegationsResponse;
                toJSON(message: _83.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorDelegationsResponse>): _83.QueryDelegatorDelegationsResponse;
                fromAmino(object: _83.QueryDelegatorDelegationsResponseAmino): _83.QueryDelegatorDelegationsResponse;
                toAmino(message: _83.QueryDelegatorDelegationsResponse): _83.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorDelegationsResponseAminoMsg): _83.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _83.QueryDelegatorDelegationsResponse): _83.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorDelegationsResponseProtoMsg): _83.QueryDelegatorDelegationsResponse;
                toProto(message: _83.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorDelegationsResponse): _83.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _83.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _83.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorUnbondingDelegationsRequest>): _83.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _83.QueryDelegatorUnbondingDelegationsRequestAmino): _83.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _83.QueryDelegatorUnbondingDelegationsRequest): _83.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _83.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _83.QueryDelegatorUnbondingDelegationsRequest): _83.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _83.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _83.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorUnbondingDelegationsRequest): _83.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _83.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _83.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorUnbondingDelegationsResponse>): _83.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _83.QueryDelegatorUnbondingDelegationsResponseAmino): _83.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _83.QueryDelegatorUnbondingDelegationsResponse): _83.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _83.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _83.QueryDelegatorUnbondingDelegationsResponse): _83.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _83.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _83.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorUnbondingDelegationsResponse): _83.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _83.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryRedelegationsRequest;
                fromJSON(object: any): _83.QueryRedelegationsRequest;
                toJSON(message: _83.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_83.QueryRedelegationsRequest>): _83.QueryRedelegationsRequest;
                fromAmino(object: _83.QueryRedelegationsRequestAmino): _83.QueryRedelegationsRequest;
                toAmino(message: _83.QueryRedelegationsRequest): _83.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _83.QueryRedelegationsRequestAminoMsg): _83.QueryRedelegationsRequest;
                toAminoMsg(message: _83.QueryRedelegationsRequest): _83.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryRedelegationsRequestProtoMsg): _83.QueryRedelegationsRequest;
                toProto(message: _83.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryRedelegationsRequest): _83.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _83.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryRedelegationsResponse;
                fromJSON(object: any): _83.QueryRedelegationsResponse;
                toJSON(message: _83.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_83.QueryRedelegationsResponse>): _83.QueryRedelegationsResponse;
                fromAmino(object: _83.QueryRedelegationsResponseAmino): _83.QueryRedelegationsResponse;
                toAmino(message: _83.QueryRedelegationsResponse): _83.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _83.QueryRedelegationsResponseAminoMsg): _83.QueryRedelegationsResponse;
                toAminoMsg(message: _83.QueryRedelegationsResponse): _83.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryRedelegationsResponseProtoMsg): _83.QueryRedelegationsResponse;
                toProto(message: _83.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryRedelegationsResponse): _83.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _83.QueryDelegatorValidatorsRequest;
                toJSON(message: _83.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsRequest>): _83.QueryDelegatorValidatorsRequest;
                fromAmino(object: _83.QueryDelegatorValidatorsRequestAmino): _83.QueryDelegatorValidatorsRequest;
                toAmino(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsRequestAminoMsg): _83.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsRequestProtoMsg): _83.QueryDelegatorValidatorsRequest;
                toProto(message: _83.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsRequest): _83.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _83.QueryDelegatorValidatorsResponse;
                toJSON(message: _83.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorsResponse>): _83.QueryDelegatorValidatorsResponse;
                fromAmino(object: _83.QueryDelegatorValidatorsResponseAmino): _83.QueryDelegatorValidatorsResponse;
                toAmino(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorsResponseAminoMsg): _83.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorsResponseProtoMsg): _83.QueryDelegatorValidatorsResponse;
                toProto(message: _83.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorsResponse): _83.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _83.QueryDelegatorValidatorRequest;
                toJSON(message: _83.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorRequest>): _83.QueryDelegatorValidatorRequest;
                fromAmino(object: _83.QueryDelegatorValidatorRequestAmino): _83.QueryDelegatorValidatorRequest;
                toAmino(message: _83.QueryDelegatorValidatorRequest): _83.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorRequestAminoMsg): _83.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _83.QueryDelegatorValidatorRequest): _83.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorRequestProtoMsg): _83.QueryDelegatorValidatorRequest;
                toProto(message: _83.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorRequest): _83.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _83.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _83.QueryDelegatorValidatorResponse;
                toJSON(message: _83.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_83.QueryDelegatorValidatorResponse>): _83.QueryDelegatorValidatorResponse;
                fromAmino(object: _83.QueryDelegatorValidatorResponseAmino): _83.QueryDelegatorValidatorResponse;
                toAmino(message: _83.QueryDelegatorValidatorResponse): _83.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _83.QueryDelegatorValidatorResponseAminoMsg): _83.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _83.QueryDelegatorValidatorResponse): _83.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _83.QueryDelegatorValidatorResponseProtoMsg): _83.QueryDelegatorValidatorResponse;
                toProto(message: _83.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _83.QueryDelegatorValidatorResponse): _83.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _83.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryHistoricalInfoRequest;
                fromJSON(object: any): _83.QueryHistoricalInfoRequest;
                toJSON(message: _83.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_83.QueryHistoricalInfoRequest>): _83.QueryHistoricalInfoRequest;
                fromAmino(object: _83.QueryHistoricalInfoRequestAmino): _83.QueryHistoricalInfoRequest;
                toAmino(message: _83.QueryHistoricalInfoRequest): _83.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _83.QueryHistoricalInfoRequestAminoMsg): _83.QueryHistoricalInfoRequest;
                toAminoMsg(message: _83.QueryHistoricalInfoRequest): _83.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _83.QueryHistoricalInfoRequestProtoMsg): _83.QueryHistoricalInfoRequest;
                toProto(message: _83.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _83.QueryHistoricalInfoRequest): _83.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _83.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryHistoricalInfoResponse;
                fromJSON(object: any): _83.QueryHistoricalInfoResponse;
                toJSON(message: _83.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_83.QueryHistoricalInfoResponse>): _83.QueryHistoricalInfoResponse;
                fromAmino(object: _83.QueryHistoricalInfoResponseAmino): _83.QueryHistoricalInfoResponse;
                toAmino(message: _83.QueryHistoricalInfoResponse): _83.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _83.QueryHistoricalInfoResponseAminoMsg): _83.QueryHistoricalInfoResponse;
                toAminoMsg(message: _83.QueryHistoricalInfoResponse): _83.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _83.QueryHistoricalInfoResponseProtoMsg): _83.QueryHistoricalInfoResponse;
                toProto(message: _83.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _83.QueryHistoricalInfoResponse): _83.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _83.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolRequest;
                fromJSON(_: any): _83.QueryPoolRequest;
                toJSON(_: _83.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_83.QueryPoolRequest>): _83.QueryPoolRequest;
                fromAmino(_: _83.QueryPoolRequestAmino): _83.QueryPoolRequest;
                toAmino(_: _83.QueryPoolRequest): _83.QueryPoolRequestAmino;
                fromAminoMsg(object: _83.QueryPoolRequestAminoMsg): _83.QueryPoolRequest;
                toAminoMsg(message: _83.QueryPoolRequest): _83.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _83.QueryPoolRequestProtoMsg): _83.QueryPoolRequest;
                toProto(message: _83.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _83.QueryPoolRequest): _83.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _83.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryPoolResponse;
                fromJSON(object: any): _83.QueryPoolResponse;
                toJSON(message: _83.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_83.QueryPoolResponse>): _83.QueryPoolResponse;
                fromAmino(object: _83.QueryPoolResponseAmino): _83.QueryPoolResponse;
                toAmino(message: _83.QueryPoolResponse): _83.QueryPoolResponseAmino;
                fromAminoMsg(object: _83.QueryPoolResponseAminoMsg): _83.QueryPoolResponse;
                toAminoMsg(message: _83.QueryPoolResponse): _83.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _83.QueryPoolResponseProtoMsg): _83.QueryPoolResponse;
                toProto(message: _83.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _83.QueryPoolResponse): _83.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsRequest;
                fromJSON(_: any): _83.QueryParamsRequest;
                toJSON(_: _83.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _82.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LastValidatorPower;
                fromJSON(object: any): _82.LastValidatorPower;
                toJSON(message: _82.LastValidatorPower): unknown;
                fromPartial(object: Partial<_82.LastValidatorPower>): _82.LastValidatorPower;
                fromAmino(object: _82.LastValidatorPowerAmino): _82.LastValidatorPower;
                toAmino(message: _82.LastValidatorPower): _82.LastValidatorPowerAmino;
                fromAminoMsg(object: _82.LastValidatorPowerAminoMsg): _82.LastValidatorPower;
                toAminoMsg(message: _82.LastValidatorPower): _82.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _82.LastValidatorPowerProtoMsg): _82.LastValidatorPower;
                toProto(message: _82.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _82.LastValidatorPower): _82.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _81.AuthorizationType;
            authorizationTypeToJSON(object: _81.AuthorizationType): string;
            AuthorizationType: typeof _81.AuthorizationType;
            AuthorizationTypeSDKType: typeof _81.AuthorizationType;
            AuthorizationTypeAmino: typeof _81.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _81.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.StakeAuthorization;
                fromJSON(object: any): _81.StakeAuthorization;
                toJSON(message: _81.StakeAuthorization): unknown;
                fromPartial(object: Partial<_81.StakeAuthorization>): _81.StakeAuthorization;
                fromAmino(object: _81.StakeAuthorizationAmino): _81.StakeAuthorization;
                toAmino(message: _81.StakeAuthorization): _81.StakeAuthorizationAmino;
                fromAminoMsg(object: _81.StakeAuthorizationAminoMsg): _81.StakeAuthorization;
                toAminoMsg(message: _81.StakeAuthorization): _81.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _81.StakeAuthorizationProtoMsg): _81.StakeAuthorization;
                toProto(message: _81.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _81.StakeAuthorization): _81.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _81.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.StakeAuthorization_Validators;
                fromJSON(object: any): _81.StakeAuthorization_Validators;
                toJSON(message: _81.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_81.StakeAuthorization_Validators>): _81.StakeAuthorization_Validators;
                fromAmino(object: _81.StakeAuthorization_ValidatorsAmino): _81.StakeAuthorization_Validators;
                toAmino(message: _81.StakeAuthorization_Validators): _81.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _81.StakeAuthorization_ValidatorsAminoMsg): _81.StakeAuthorization_Validators;
                toAminoMsg(message: _81.StakeAuthorization_Validators): _81.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _81.StakeAuthorization_ValidatorsProtoMsg): _81.StakeAuthorization_Validators;
                toProto(message: _81.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _81.StakeAuthorization_Validators): _81.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _86.SignMode;
                signModeToJSON(object: _86.SignMode): string;
                SignMode: typeof _86.SignMode;
                SignModeSDKType: typeof _86.SignMode;
                SignModeAmino: typeof _86.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _86.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptors;
                    fromJSON(object: any): _86.SignatureDescriptors;
                    toJSON(message: _86.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_86.SignatureDescriptors>): _86.SignatureDescriptors;
                    fromAmino(object: _86.SignatureDescriptorsAmino): _86.SignatureDescriptors;
                    toAmino(message: _86.SignatureDescriptors): _86.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _86.SignatureDescriptorsAminoMsg): _86.SignatureDescriptors;
                    toAminoMsg(message: _86.SignatureDescriptors): _86.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _86.SignatureDescriptorsProtoMsg): _86.SignatureDescriptors;
                    toProto(message: _86.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _86.SignatureDescriptors): _86.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _86.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor;
                    fromJSON(object: any): _86.SignatureDescriptor;
                    toJSON(message: _86.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_86.SignatureDescriptor>): _86.SignatureDescriptor;
                    fromAmino(object: _86.SignatureDescriptorAmino): _86.SignatureDescriptor;
                    toAmino(message: _86.SignatureDescriptor): _86.SignatureDescriptorAmino;
                    fromAminoMsg(object: _86.SignatureDescriptorAminoMsg): _86.SignatureDescriptor;
                    toAminoMsg(message: _86.SignatureDescriptor): _86.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _86.SignatureDescriptorProtoMsg): _86.SignatureDescriptor;
                    toProto(message: _86.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _86.SignatureDescriptor): _86.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _86.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data;
                    fromJSON(object: any): _86.SignatureDescriptor_Data;
                    toJSON(message: _86.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data>): _86.SignatureDescriptor_Data;
                    fromAmino(object: _86.SignatureDescriptor_DataAmino): _86.SignatureDescriptor_Data;
                    toAmino(message: _86.SignatureDescriptor_Data): _86.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _86.SignatureDescriptor_DataAminoMsg): _86.SignatureDescriptor_Data;
                    toAminoMsg(message: _86.SignatureDescriptor_Data): _86.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _86.SignatureDescriptor_DataProtoMsg): _86.SignatureDescriptor_Data;
                    toProto(message: _86.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _86.SignatureDescriptor_Data): _86.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _86.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _86.SignatureDescriptor_Data_Single;
                    toJSON(message: _86.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data_Single>): _86.SignatureDescriptor_Data_Single;
                    fromAmino(object: _86.SignatureDescriptor_Data_SingleAmino): _86.SignatureDescriptor_Data_Single;
                    toAmino(message: _86.SignatureDescriptor_Data_Single): _86.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _86.SignatureDescriptor_Data_SingleAminoMsg): _86.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _86.SignatureDescriptor_Data_Single): _86.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _86.SignatureDescriptor_Data_SingleProtoMsg): _86.SignatureDescriptor_Data_Single;
                    toProto(message: _86.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _86.SignatureDescriptor_Data_Single): _86.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _86.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _86.SignatureDescriptor_Data_Multi;
                    toJSON(message: _86.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_86.SignatureDescriptor_Data_Multi>): _86.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _86.SignatureDescriptor_Data_MultiAmino): _86.SignatureDescriptor_Data_Multi;
                    toAmino(message: _86.SignatureDescriptor_Data_Multi): _86.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _86.SignatureDescriptor_Data_MultiAminoMsg): _86.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _86.SignatureDescriptor_Data_Multi): _86.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _86.SignatureDescriptor_Data_MultiProtoMsg): _86.SignatureDescriptor_Data_Multi;
                    toProto(message: _86.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _86.SignatureDescriptor_Data_Multi): _86.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _278.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _87.SimulateRequest): Promise<_87.SimulateResponse>;
                getTx(request: _87.GetTxRequest): Promise<_87.GetTxResponse>;
                broadcastTx(request: _87.BroadcastTxRequest): Promise<_87.BroadcastTxResponse>;
                getTxsEvent(request: _87.GetTxsEventRequest): Promise<_87.GetTxsEventResponse>;
                getBlockWithTxs(request: _87.GetBlockWithTxsRequest): Promise<_87.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _88.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Tx;
                fromJSON(object: any): _88.Tx;
                toJSON(message: _88.Tx): unknown;
                fromPartial(object: Partial<_88.Tx>): _88.Tx;
                fromAmino(object: _88.TxAmino): _88.Tx;
                toAmino(message: _88.Tx): _88.TxAmino;
                fromAminoMsg(object: _88.TxAminoMsg): _88.Tx;
                toAminoMsg(message: _88.Tx): _88.TxAminoMsg;
                fromProtoMsg(message: _88.TxProtoMsg): _88.Tx;
                toProto(message: _88.Tx): Uint8Array;
                toProtoMsg(message: _88.Tx): _88.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _88.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxRaw;
                fromJSON(object: any): _88.TxRaw;
                toJSON(message: _88.TxRaw): unknown;
                fromPartial(object: Partial<_88.TxRaw>): _88.TxRaw;
                fromAmino(object: _88.TxRawAmino): _88.TxRaw;
                toAmino(message: _88.TxRaw): _88.TxRawAmino;
                fromAminoMsg(object: _88.TxRawAminoMsg): _88.TxRaw;
                toAminoMsg(message: _88.TxRaw): _88.TxRawAminoMsg;
                fromProtoMsg(message: _88.TxRawProtoMsg): _88.TxRaw;
                toProto(message: _88.TxRaw): Uint8Array;
                toProtoMsg(message: _88.TxRaw): _88.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _88.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignDoc;
                fromJSON(object: any): _88.SignDoc;
                toJSON(message: _88.SignDoc): unknown;
                fromPartial(object: Partial<_88.SignDoc>): _88.SignDoc;
                fromAmino(object: _88.SignDocAmino): _88.SignDoc;
                toAmino(message: _88.SignDoc): _88.SignDocAmino;
                fromAminoMsg(object: _88.SignDocAminoMsg): _88.SignDoc;
                toAminoMsg(message: _88.SignDoc): _88.SignDocAminoMsg;
                fromProtoMsg(message: _88.SignDocProtoMsg): _88.SignDoc;
                toProto(message: _88.SignDoc): Uint8Array;
                toProtoMsg(message: _88.SignDoc): _88.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _88.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignDocDirectAux;
                fromJSON(object: any): _88.SignDocDirectAux;
                toJSON(message: _88.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_88.SignDocDirectAux>): _88.SignDocDirectAux;
                fromAmino(object: _88.SignDocDirectAuxAmino): _88.SignDocDirectAux;
                toAmino(message: _88.SignDocDirectAux): _88.SignDocDirectAuxAmino;
                fromAminoMsg(object: _88.SignDocDirectAuxAminoMsg): _88.SignDocDirectAux;
                toAminoMsg(message: _88.SignDocDirectAux): _88.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _88.SignDocDirectAuxProtoMsg): _88.SignDocDirectAux;
                toProto(message: _88.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _88.SignDocDirectAux): _88.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _88.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TxBody;
                fromJSON(object: any): _88.TxBody;
                toJSON(message: _88.TxBody): unknown;
                fromPartial(object: Partial<_88.TxBody>): _88.TxBody;
                fromAmino(object: _88.TxBodyAmino): _88.TxBody;
                toAmino(message: _88.TxBody): _88.TxBodyAmino;
                fromAminoMsg(object: _88.TxBodyAminoMsg): _88.TxBody;
                toAminoMsg(message: _88.TxBody): _88.TxBodyAminoMsg;
                fromProtoMsg(message: _88.TxBodyProtoMsg): _88.TxBody;
                toProto(message: _88.TxBody): Uint8Array;
                toProtoMsg(message: _88.TxBody): _88.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _88.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AuthInfo;
                fromJSON(object: any): _88.AuthInfo;
                toJSON(message: _88.AuthInfo): unknown;
                fromPartial(object: Partial<_88.AuthInfo>): _88.AuthInfo;
                fromAmino(object: _88.AuthInfoAmino): _88.AuthInfo;
                toAmino(message: _88.AuthInfo): _88.AuthInfoAmino;
                fromAminoMsg(object: _88.AuthInfoAminoMsg): _88.AuthInfo;
                toAminoMsg(message: _88.AuthInfo): _88.AuthInfoAminoMsg;
                fromProtoMsg(message: _88.AuthInfoProtoMsg): _88.AuthInfo;
                toProto(message: _88.AuthInfo): Uint8Array;
                toProtoMsg(message: _88.AuthInfo): _88.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _88.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignerInfo;
                fromJSON(object: any): _88.SignerInfo;
                toJSON(message: _88.SignerInfo): unknown;
                fromPartial(object: Partial<_88.SignerInfo>): _88.SignerInfo;
                fromAmino(object: _88.SignerInfoAmino): _88.SignerInfo;
                toAmino(message: _88.SignerInfo): _88.SignerInfoAmino;
                fromAminoMsg(object: _88.SignerInfoAminoMsg): _88.SignerInfo;
                toAminoMsg(message: _88.SignerInfo): _88.SignerInfoAminoMsg;
                fromProtoMsg(message: _88.SignerInfoProtoMsg): _88.SignerInfo;
                toProto(message: _88.SignerInfo): Uint8Array;
                toProtoMsg(message: _88.SignerInfo): _88.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _88.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo;
                fromJSON(object: any): _88.ModeInfo;
                toJSON(message: _88.ModeInfo): unknown;
                fromPartial(object: Partial<_88.ModeInfo>): _88.ModeInfo;
                fromAmino(object: _88.ModeInfoAmino): _88.ModeInfo;
                toAmino(message: _88.ModeInfo): _88.ModeInfoAmino;
                fromAminoMsg(object: _88.ModeInfoAminoMsg): _88.ModeInfo;
                toAminoMsg(message: _88.ModeInfo): _88.ModeInfoAminoMsg;
                fromProtoMsg(message: _88.ModeInfoProtoMsg): _88.ModeInfo;
                toProto(message: _88.ModeInfo): Uint8Array;
                toProtoMsg(message: _88.ModeInfo): _88.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _88.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo_Single;
                fromJSON(object: any): _88.ModeInfo_Single;
                toJSON(message: _88.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_88.ModeInfo_Single>): _88.ModeInfo_Single;
                fromAmino(object: _88.ModeInfo_SingleAmino): _88.ModeInfo_Single;
                toAmino(message: _88.ModeInfo_Single): _88.ModeInfo_SingleAmino;
                fromAminoMsg(object: _88.ModeInfo_SingleAminoMsg): _88.ModeInfo_Single;
                toAminoMsg(message: _88.ModeInfo_Single): _88.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _88.ModeInfo_SingleProtoMsg): _88.ModeInfo_Single;
                toProto(message: _88.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _88.ModeInfo_Single): _88.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _88.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ModeInfo_Multi;
                fromJSON(object: any): _88.ModeInfo_Multi;
                toJSON(message: _88.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_88.ModeInfo_Multi>): _88.ModeInfo_Multi;
                fromAmino(object: _88.ModeInfo_MultiAmino): _88.ModeInfo_Multi;
                toAmino(message: _88.ModeInfo_Multi): _88.ModeInfo_MultiAmino;
                fromAminoMsg(object: _88.ModeInfo_MultiAminoMsg): _88.ModeInfo_Multi;
                toAminoMsg(message: _88.ModeInfo_Multi): _88.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _88.ModeInfo_MultiProtoMsg): _88.ModeInfo_Multi;
                toProto(message: _88.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _88.ModeInfo_Multi): _88.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _88.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Fee;
                fromJSON(object: any): _88.Fee;
                toJSON(message: _88.Fee): unknown;
                fromPartial(object: Partial<_88.Fee>): _88.Fee;
                fromAmino(object: _88.FeeAmino): _88.Fee;
                toAmino(message: _88.Fee): _88.FeeAmino;
                fromAminoMsg(object: _88.FeeAminoMsg): _88.Fee;
                toAminoMsg(message: _88.Fee): _88.FeeAminoMsg;
                fromProtoMsg(message: _88.FeeProtoMsg): _88.Fee;
                toProto(message: _88.Fee): Uint8Array;
                toProtoMsg(message: _88.Fee): _88.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _88.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Tip;
                fromJSON(object: any): _88.Tip;
                toJSON(message: _88.Tip): unknown;
                fromPartial(object: Partial<_88.Tip>): _88.Tip;
                fromAmino(object: _88.TipAmino): _88.Tip;
                toAmino(message: _88.Tip): _88.TipAmino;
                fromAminoMsg(object: _88.TipAminoMsg): _88.Tip;
                toAminoMsg(message: _88.Tip): _88.TipAminoMsg;
                fromProtoMsg(message: _88.TipProtoMsg): _88.Tip;
                toProto(message: _88.Tip): Uint8Array;
                toProtoMsg(message: _88.Tip): _88.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _88.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.AuxSignerData;
                fromJSON(object: any): _88.AuxSignerData;
                toJSON(message: _88.AuxSignerData): unknown;
                fromPartial(object: Partial<_88.AuxSignerData>): _88.AuxSignerData;
                fromAmino(object: _88.AuxSignerDataAmino): _88.AuxSignerData;
                toAmino(message: _88.AuxSignerData): _88.AuxSignerDataAmino;
                fromAminoMsg(object: _88.AuxSignerDataAminoMsg): _88.AuxSignerData;
                toAminoMsg(message: _88.AuxSignerData): _88.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _88.AuxSignerDataProtoMsg): _88.AuxSignerData;
                toProto(message: _88.AuxSignerData): Uint8Array;
                toProtoMsg(message: _88.AuxSignerData): _88.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _87.OrderBy;
            orderByToJSON(object: _87.OrderBy): string;
            broadcastModeFromJSON(object: any): _87.BroadcastMode;
            broadcastModeToJSON(object: _87.BroadcastMode): string;
            OrderBy: typeof _87.OrderBy;
            OrderBySDKType: typeof _87.OrderBy;
            OrderByAmino: typeof _87.OrderBy;
            BroadcastMode: typeof _87.BroadcastMode;
            BroadcastModeSDKType: typeof _87.BroadcastMode;
            BroadcastModeAmino: typeof _87.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _87.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxsEventRequest;
                fromJSON(object: any): _87.GetTxsEventRequest;
                toJSON(message: _87.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_87.GetTxsEventRequest>): _87.GetTxsEventRequest;
                fromAmino(object: _87.GetTxsEventRequestAmino): _87.GetTxsEventRequest;
                toAmino(message: _87.GetTxsEventRequest): _87.GetTxsEventRequestAmino;
                fromAminoMsg(object: _87.GetTxsEventRequestAminoMsg): _87.GetTxsEventRequest;
                toAminoMsg(message: _87.GetTxsEventRequest): _87.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _87.GetTxsEventRequestProtoMsg): _87.GetTxsEventRequest;
                toProto(message: _87.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _87.GetTxsEventRequest): _87.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _87.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxsEventResponse;
                fromJSON(object: any): _87.GetTxsEventResponse;
                toJSON(message: _87.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_87.GetTxsEventResponse>): _87.GetTxsEventResponse;
                fromAmino(object: _87.GetTxsEventResponseAmino): _87.GetTxsEventResponse;
                toAmino(message: _87.GetTxsEventResponse): _87.GetTxsEventResponseAmino;
                fromAminoMsg(object: _87.GetTxsEventResponseAminoMsg): _87.GetTxsEventResponse;
                toAminoMsg(message: _87.GetTxsEventResponse): _87.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _87.GetTxsEventResponseProtoMsg): _87.GetTxsEventResponse;
                toProto(message: _87.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _87.GetTxsEventResponse): _87.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _87.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BroadcastTxRequest;
                fromJSON(object: any): _87.BroadcastTxRequest;
                toJSON(message: _87.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_87.BroadcastTxRequest>): _87.BroadcastTxRequest;
                fromAmino(object: _87.BroadcastTxRequestAmino): _87.BroadcastTxRequest;
                toAmino(message: _87.BroadcastTxRequest): _87.BroadcastTxRequestAmino;
                fromAminoMsg(object: _87.BroadcastTxRequestAminoMsg): _87.BroadcastTxRequest;
                toAminoMsg(message: _87.BroadcastTxRequest): _87.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _87.BroadcastTxRequestProtoMsg): _87.BroadcastTxRequest;
                toProto(message: _87.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _87.BroadcastTxRequest): _87.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _87.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.BroadcastTxResponse;
                fromJSON(object: any): _87.BroadcastTxResponse;
                toJSON(message: _87.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_87.BroadcastTxResponse>): _87.BroadcastTxResponse;
                fromAmino(object: _87.BroadcastTxResponseAmino): _87.BroadcastTxResponse;
                toAmino(message: _87.BroadcastTxResponse): _87.BroadcastTxResponseAmino;
                fromAminoMsg(object: _87.BroadcastTxResponseAminoMsg): _87.BroadcastTxResponse;
                toAminoMsg(message: _87.BroadcastTxResponse): _87.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _87.BroadcastTxResponseProtoMsg): _87.BroadcastTxResponse;
                toProto(message: _87.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _87.BroadcastTxResponse): _87.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _87.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SimulateRequest;
                fromJSON(object: any): _87.SimulateRequest;
                toJSON(message: _87.SimulateRequest): unknown;
                fromPartial(object: Partial<_87.SimulateRequest>): _87.SimulateRequest;
                fromAmino(object: _87.SimulateRequestAmino): _87.SimulateRequest;
                toAmino(message: _87.SimulateRequest): _87.SimulateRequestAmino;
                fromAminoMsg(object: _87.SimulateRequestAminoMsg): _87.SimulateRequest;
                toAminoMsg(message: _87.SimulateRequest): _87.SimulateRequestAminoMsg;
                fromProtoMsg(message: _87.SimulateRequestProtoMsg): _87.SimulateRequest;
                toProto(message: _87.SimulateRequest): Uint8Array;
                toProtoMsg(message: _87.SimulateRequest): _87.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _87.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SimulateResponse;
                fromJSON(object: any): _87.SimulateResponse;
                toJSON(message: _87.SimulateResponse): unknown;
                fromPartial(object: Partial<_87.SimulateResponse>): _87.SimulateResponse;
                fromAmino(object: _87.SimulateResponseAmino): _87.SimulateResponse;
                toAmino(message: _87.SimulateResponse): _87.SimulateResponseAmino;
                fromAminoMsg(object: _87.SimulateResponseAminoMsg): _87.SimulateResponse;
                toAminoMsg(message: _87.SimulateResponse): _87.SimulateResponseAminoMsg;
                fromProtoMsg(message: _87.SimulateResponseProtoMsg): _87.SimulateResponse;
                toProto(message: _87.SimulateResponse): Uint8Array;
                toProtoMsg(message: _87.SimulateResponse): _87.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _87.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxRequest;
                fromJSON(object: any): _87.GetTxRequest;
                toJSON(message: _87.GetTxRequest): unknown;
                fromPartial(object: Partial<_87.GetTxRequest>): _87.GetTxRequest;
                fromAmino(object: _87.GetTxRequestAmino): _87.GetTxRequest;
                toAmino(message: _87.GetTxRequest): _87.GetTxRequestAmino;
                fromAminoMsg(object: _87.GetTxRequestAminoMsg): _87.GetTxRequest;
                toAminoMsg(message: _87.GetTxRequest): _87.GetTxRequestAminoMsg;
                fromProtoMsg(message: _87.GetTxRequestProtoMsg): _87.GetTxRequest;
                toProto(message: _87.GetTxRequest): Uint8Array;
                toProtoMsg(message: _87.GetTxRequest): _87.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _87.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetTxResponse;
                fromJSON(object: any): _87.GetTxResponse;
                toJSON(message: _87.GetTxResponse): unknown;
                fromPartial(object: Partial<_87.GetTxResponse>): _87.GetTxResponse;
                fromAmino(object: _87.GetTxResponseAmino): _87.GetTxResponse;
                toAmino(message: _87.GetTxResponse): _87.GetTxResponseAmino;
                fromAminoMsg(object: _87.GetTxResponseAminoMsg): _87.GetTxResponse;
                toAminoMsg(message: _87.GetTxResponse): _87.GetTxResponseAminoMsg;
                fromProtoMsg(message: _87.GetTxResponseProtoMsg): _87.GetTxResponse;
                toProto(message: _87.GetTxResponse): Uint8Array;
                toProtoMsg(message: _87.GetTxResponse): _87.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _87.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetBlockWithTxsRequest;
                fromJSON(object: any): _87.GetBlockWithTxsRequest;
                toJSON(message: _87.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_87.GetBlockWithTxsRequest>): _87.GetBlockWithTxsRequest;
                fromAmino(object: _87.GetBlockWithTxsRequestAmino): _87.GetBlockWithTxsRequest;
                toAmino(message: _87.GetBlockWithTxsRequest): _87.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _87.GetBlockWithTxsRequestAminoMsg): _87.GetBlockWithTxsRequest;
                toAminoMsg(message: _87.GetBlockWithTxsRequest): _87.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _87.GetBlockWithTxsRequestProtoMsg): _87.GetBlockWithTxsRequest;
                toProto(message: _87.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _87.GetBlockWithTxsRequest): _87.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _87.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GetBlockWithTxsResponse;
                fromJSON(object: any): _87.GetBlockWithTxsResponse;
                toJSON(message: _87.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_87.GetBlockWithTxsResponse>): _87.GetBlockWithTxsResponse;
                fromAmino(object: _87.GetBlockWithTxsResponseAmino): _87.GetBlockWithTxsResponse;
                toAmino(message: _87.GetBlockWithTxsResponse): _87.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _87.GetBlockWithTxsResponseAminoMsg): _87.GetBlockWithTxsResponse;
                toAminoMsg(message: _87.GetBlockWithTxsResponse): _87.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _87.GetBlockWithTxsResponseProtoMsg): _87.GetBlockWithTxsResponse;
                toProto(message: _87.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _87.GetBlockWithTxsResponse): _87.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _89.QueryCurrentPlanRequest): Promise<_89.QueryCurrentPlanResponse>;
                appliedPlan(request: _89.QueryAppliedPlanRequest): Promise<_89.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _89.QueryUpgradedConsensusStateRequest): Promise<_89.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _89.QueryModuleVersionsRequest): Promise<_89.QueryModuleVersionsResponse>;
                authority(request?: _89.QueryAuthorityRequest): Promise<_89.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _90.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _90.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _90.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _90.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _90.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _90.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _90.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _90.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _90.MsgSoftwareUpgrade) => _90.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _90.MsgSoftwareUpgradeAmino) => _90.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _90.MsgCancelUpgrade) => _90.MsgCancelUpgradeAmino;
                    fromAmino: (object: _90.MsgCancelUpgradeAmino) => _90.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _91.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Plan;
                fromJSON(object: any): _91.Plan;
                toJSON(message: _91.Plan): unknown;
                fromPartial(object: Partial<_91.Plan>): _91.Plan;
                fromAmino(object: _91.PlanAmino): _91.Plan;
                toAmino(message: _91.Plan): _91.PlanAmino;
                fromAminoMsg(object: _91.PlanAminoMsg): _91.Plan;
                toAminoMsg(message: _91.Plan): _91.PlanAminoMsg;
                fromProtoMsg(message: _91.PlanProtoMsg): _91.Plan;
                toProto(message: _91.Plan): Uint8Array;
                toProtoMsg(message: _91.Plan): _91.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _91.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SoftwareUpgradeProposal;
                fromJSON(object: any): _91.SoftwareUpgradeProposal;
                toJSON(message: _91.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_91.SoftwareUpgradeProposal>): _91.SoftwareUpgradeProposal;
                fromAmino(object: _91.SoftwareUpgradeProposalAmino): _91.SoftwareUpgradeProposal;
                toAmino(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _91.SoftwareUpgradeProposalAminoMsg): _91.SoftwareUpgradeProposal;
                toAminoMsg(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _91.SoftwareUpgradeProposalProtoMsg): _91.SoftwareUpgradeProposal;
                toProto(message: _91.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _91.SoftwareUpgradeProposal): _91.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _91.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _91.CancelSoftwareUpgradeProposal;
                toJSON(message: _91.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_91.CancelSoftwareUpgradeProposal>): _91.CancelSoftwareUpgradeProposal;
                fromAmino(object: _91.CancelSoftwareUpgradeProposalAmino): _91.CancelSoftwareUpgradeProposal;
                toAmino(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _91.CancelSoftwareUpgradeProposalAminoMsg): _91.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _91.CancelSoftwareUpgradeProposalProtoMsg): _91.CancelSoftwareUpgradeProposal;
                toProto(message: _91.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _91.CancelSoftwareUpgradeProposal): _91.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _91.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ModuleVersion;
                fromJSON(object: any): _91.ModuleVersion;
                toJSON(message: _91.ModuleVersion): unknown;
                fromPartial(object: Partial<_91.ModuleVersion>): _91.ModuleVersion;
                fromAmino(object: _91.ModuleVersionAmino): _91.ModuleVersion;
                toAmino(message: _91.ModuleVersion): _91.ModuleVersionAmino;
                fromAminoMsg(object: _91.ModuleVersionAminoMsg): _91.ModuleVersion;
                toAminoMsg(message: _91.ModuleVersion): _91.ModuleVersionAminoMsg;
                fromProtoMsg(message: _91.ModuleVersionProtoMsg): _91.ModuleVersion;
                toProto(message: _91.ModuleVersion): Uint8Array;
                toProtoMsg(message: _91.ModuleVersion): _91.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _90.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSoftwareUpgrade;
                fromJSON(object: any): _90.MsgSoftwareUpgrade;
                toJSON(message: _90.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_90.MsgSoftwareUpgrade>): _90.MsgSoftwareUpgrade;
                fromAmino(object: _90.MsgSoftwareUpgradeAmino): _90.MsgSoftwareUpgrade;
                toAmino(message: _90.MsgSoftwareUpgrade): _90.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _90.MsgSoftwareUpgradeAminoMsg): _90.MsgSoftwareUpgrade;
                toAminoMsg(message: _90.MsgSoftwareUpgrade): _90.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _90.MsgSoftwareUpgradeProtoMsg): _90.MsgSoftwareUpgrade;
                toProto(message: _90.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _90.MsgSoftwareUpgrade): _90.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _90.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _90.MsgSoftwareUpgradeResponse;
                toJSON(_: _90.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_90.MsgSoftwareUpgradeResponse>): _90.MsgSoftwareUpgradeResponse;
                fromAmino(_: _90.MsgSoftwareUpgradeResponseAmino): _90.MsgSoftwareUpgradeResponse;
                toAmino(_: _90.MsgSoftwareUpgradeResponse): _90.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _90.MsgSoftwareUpgradeResponseAminoMsg): _90.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _90.MsgSoftwareUpgradeResponse): _90.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _90.MsgSoftwareUpgradeResponseProtoMsg): _90.MsgSoftwareUpgradeResponse;
                toProto(message: _90.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _90.MsgSoftwareUpgradeResponse): _90.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _90.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUpgrade;
                fromJSON(object: any): _90.MsgCancelUpgrade;
                toJSON(message: _90.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_90.MsgCancelUpgrade>): _90.MsgCancelUpgrade;
                fromAmino(object: _90.MsgCancelUpgradeAmino): _90.MsgCancelUpgrade;
                toAmino(message: _90.MsgCancelUpgrade): _90.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _90.MsgCancelUpgradeAminoMsg): _90.MsgCancelUpgrade;
                toAminoMsg(message: _90.MsgCancelUpgrade): _90.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _90.MsgCancelUpgradeProtoMsg): _90.MsgCancelUpgrade;
                toProto(message: _90.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _90.MsgCancelUpgrade): _90.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _90.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgCancelUpgradeResponse;
                fromJSON(_: any): _90.MsgCancelUpgradeResponse;
                toJSON(_: _90.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_90.MsgCancelUpgradeResponse>): _90.MsgCancelUpgradeResponse;
                fromAmino(_: _90.MsgCancelUpgradeResponseAmino): _90.MsgCancelUpgradeResponse;
                toAmino(_: _90.MsgCancelUpgradeResponse): _90.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _90.MsgCancelUpgradeResponseAminoMsg): _90.MsgCancelUpgradeResponse;
                toAminoMsg(message: _90.MsgCancelUpgradeResponse): _90.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _90.MsgCancelUpgradeResponseProtoMsg): _90.MsgCancelUpgradeResponse;
                toProto(message: _90.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _90.MsgCancelUpgradeResponse): _90.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _89.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCurrentPlanRequest;
                fromJSON(_: any): _89.QueryCurrentPlanRequest;
                toJSON(_: _89.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_89.QueryCurrentPlanRequest>): _89.QueryCurrentPlanRequest;
                fromAmino(_: _89.QueryCurrentPlanRequestAmino): _89.QueryCurrentPlanRequest;
                toAmino(_: _89.QueryCurrentPlanRequest): _89.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _89.QueryCurrentPlanRequestAminoMsg): _89.QueryCurrentPlanRequest;
                toAminoMsg(message: _89.QueryCurrentPlanRequest): _89.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _89.QueryCurrentPlanRequestProtoMsg): _89.QueryCurrentPlanRequest;
                toProto(message: _89.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _89.QueryCurrentPlanRequest): _89.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _89.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryCurrentPlanResponse;
                fromJSON(object: any): _89.QueryCurrentPlanResponse;
                toJSON(message: _89.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_89.QueryCurrentPlanResponse>): _89.QueryCurrentPlanResponse;
                fromAmino(object: _89.QueryCurrentPlanResponseAmino): _89.QueryCurrentPlanResponse;
                toAmino(message: _89.QueryCurrentPlanResponse): _89.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _89.QueryCurrentPlanResponseAminoMsg): _89.QueryCurrentPlanResponse;
                toAminoMsg(message: _89.QueryCurrentPlanResponse): _89.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _89.QueryCurrentPlanResponseProtoMsg): _89.QueryCurrentPlanResponse;
                toProto(message: _89.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _89.QueryCurrentPlanResponse): _89.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _89.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAppliedPlanRequest;
                fromJSON(object: any): _89.QueryAppliedPlanRequest;
                toJSON(message: _89.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_89.QueryAppliedPlanRequest>): _89.QueryAppliedPlanRequest;
                fromAmino(object: _89.QueryAppliedPlanRequestAmino): _89.QueryAppliedPlanRequest;
                toAmino(message: _89.QueryAppliedPlanRequest): _89.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _89.QueryAppliedPlanRequestAminoMsg): _89.QueryAppliedPlanRequest;
                toAminoMsg(message: _89.QueryAppliedPlanRequest): _89.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAppliedPlanRequestProtoMsg): _89.QueryAppliedPlanRequest;
                toProto(message: _89.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAppliedPlanRequest): _89.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _89.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAppliedPlanResponse;
                fromJSON(object: any): _89.QueryAppliedPlanResponse;
                toJSON(message: _89.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_89.QueryAppliedPlanResponse>): _89.QueryAppliedPlanResponse;
                fromAmino(object: _89.QueryAppliedPlanResponseAmino): _89.QueryAppliedPlanResponse;
                toAmino(message: _89.QueryAppliedPlanResponse): _89.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _89.QueryAppliedPlanResponseAminoMsg): _89.QueryAppliedPlanResponse;
                toAminoMsg(message: _89.QueryAppliedPlanResponse): _89.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAppliedPlanResponseProtoMsg): _89.QueryAppliedPlanResponse;
                toProto(message: _89.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAppliedPlanResponse): _89.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _89.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _89.QueryUpgradedConsensusStateRequest;
                toJSON(message: _89.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_89.QueryUpgradedConsensusStateRequest>): _89.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _89.QueryUpgradedConsensusStateRequestAmino): _89.QueryUpgradedConsensusStateRequest;
                toAmino(message: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _89.QueryUpgradedConsensusStateRequestAminoMsg): _89.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _89.QueryUpgradedConsensusStateRequestProtoMsg): _89.QueryUpgradedConsensusStateRequest;
                toProto(message: _89.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _89.QueryUpgradedConsensusStateRequest): _89.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _89.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _89.QueryUpgradedConsensusStateResponse;
                toJSON(message: _89.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_89.QueryUpgradedConsensusStateResponse>): _89.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _89.QueryUpgradedConsensusStateResponseAmino): _89.QueryUpgradedConsensusStateResponse;
                toAmino(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _89.QueryUpgradedConsensusStateResponseAminoMsg): _89.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _89.QueryUpgradedConsensusStateResponseProtoMsg): _89.QueryUpgradedConsensusStateResponse;
                toProto(message: _89.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _89.QueryUpgradedConsensusStateResponse): _89.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _89.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleVersionsRequest;
                fromJSON(object: any): _89.QueryModuleVersionsRequest;
                toJSON(message: _89.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_89.QueryModuleVersionsRequest>): _89.QueryModuleVersionsRequest;
                fromAmino(object: _89.QueryModuleVersionsRequestAmino): _89.QueryModuleVersionsRequest;
                toAmino(message: _89.QueryModuleVersionsRequest): _89.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _89.QueryModuleVersionsRequestAminoMsg): _89.QueryModuleVersionsRequest;
                toAminoMsg(message: _89.QueryModuleVersionsRequest): _89.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryModuleVersionsRequestProtoMsg): _89.QueryModuleVersionsRequest;
                toProto(message: _89.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryModuleVersionsRequest): _89.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _89.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryModuleVersionsResponse;
                fromJSON(object: any): _89.QueryModuleVersionsResponse;
                toJSON(message: _89.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_89.QueryModuleVersionsResponse>): _89.QueryModuleVersionsResponse;
                fromAmino(object: _89.QueryModuleVersionsResponseAmino): _89.QueryModuleVersionsResponse;
                toAmino(message: _89.QueryModuleVersionsResponse): _89.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _89.QueryModuleVersionsResponseAminoMsg): _89.QueryModuleVersionsResponse;
                toAminoMsg(message: _89.QueryModuleVersionsResponse): _89.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryModuleVersionsResponseProtoMsg): _89.QueryModuleVersionsResponse;
                toProto(message: _89.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryModuleVersionsResponse): _89.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _89.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAuthorityRequest;
                fromJSON(_: any): _89.QueryAuthorityRequest;
                toJSON(_: _89.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_89.QueryAuthorityRequest>): _89.QueryAuthorityRequest;
                fromAmino(_: _89.QueryAuthorityRequestAmino): _89.QueryAuthorityRequest;
                toAmino(_: _89.QueryAuthorityRequest): _89.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _89.QueryAuthorityRequestAminoMsg): _89.QueryAuthorityRequest;
                toAminoMsg(message: _89.QueryAuthorityRequest): _89.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _89.QueryAuthorityRequestProtoMsg): _89.QueryAuthorityRequest;
                toProto(message: _89.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _89.QueryAuthorityRequest): _89.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _89.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryAuthorityResponse;
                fromJSON(object: any): _89.QueryAuthorityResponse;
                toJSON(message: _89.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_89.QueryAuthorityResponse>): _89.QueryAuthorityResponse;
                fromAmino(object: _89.QueryAuthorityResponseAmino): _89.QueryAuthorityResponse;
                toAmino(message: _89.QueryAuthorityResponse): _89.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _89.QueryAuthorityResponseAminoMsg): _89.QueryAuthorityResponse;
                toAminoMsg(message: _89.QueryAuthorityResponse): _89.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _89.QueryAuthorityResponseProtoMsg): _89.QueryAuthorityResponse;
                toProto(message: _89.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _89.QueryAuthorityResponse): _89.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _92.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _92.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _92.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _92.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _92.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCreateVestingAccount) => _92.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _92.MsgCreateVestingAccountAmino) => _92.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCreatePermanentLockedAccount) => _92.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _92.MsgCreatePermanentLockedAccountAmino) => _92.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _92.MsgCreatePeriodicVestingAccount) => _92.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _92.MsgCreatePeriodicVestingAccountAmino) => _92.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _93.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BaseVestingAccount;
                fromJSON(object: any): _93.BaseVestingAccount;
                toJSON(message: _93.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_93.BaseVestingAccount>): _93.BaseVestingAccount;
                fromAmino(object: _93.BaseVestingAccountAmino): _93.BaseVestingAccount;
                toAmino(message: _93.BaseVestingAccount): _93.BaseVestingAccountAmino;
                fromAminoMsg(object: _93.BaseVestingAccountAminoMsg): _93.BaseVestingAccount;
                toAminoMsg(message: _93.BaseVestingAccount): _93.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _93.BaseVestingAccountProtoMsg): _93.BaseVestingAccount;
                toProto(message: _93.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _93.BaseVestingAccount): _93.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _93.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ContinuousVestingAccount;
                fromJSON(object: any): _93.ContinuousVestingAccount;
                toJSON(message: _93.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_93.ContinuousVestingAccount>): _93.ContinuousVestingAccount;
                fromAmino(object: _93.ContinuousVestingAccountAmino): _93.ContinuousVestingAccount;
                toAmino(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _93.ContinuousVestingAccountAminoMsg): _93.ContinuousVestingAccount;
                toAminoMsg(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _93.ContinuousVestingAccountProtoMsg): _93.ContinuousVestingAccount;
                toProto(message: _93.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _93.ContinuousVestingAccount): _93.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _93.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DelayedVestingAccount;
                fromJSON(object: any): _93.DelayedVestingAccount;
                toJSON(message: _93.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_93.DelayedVestingAccount>): _93.DelayedVestingAccount;
                fromAmino(object: _93.DelayedVestingAccountAmino): _93.DelayedVestingAccount;
                toAmino(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountAmino;
                fromAminoMsg(object: _93.DelayedVestingAccountAminoMsg): _93.DelayedVestingAccount;
                toAminoMsg(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _93.DelayedVestingAccountProtoMsg): _93.DelayedVestingAccount;
                toProto(message: _93.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _93.DelayedVestingAccount): _93.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _93.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Period;
                fromJSON(object: any): _93.Period;
                toJSON(message: _93.Period): unknown;
                fromPartial(object: Partial<_93.Period>): _93.Period;
                fromAmino(object: _93.PeriodAmino): _93.Period;
                toAmino(message: _93.Period): _93.PeriodAmino;
                fromAminoMsg(object: _93.PeriodAminoMsg): _93.Period;
                toAminoMsg(message: _93.Period): _93.PeriodAminoMsg;
                fromProtoMsg(message: _93.PeriodProtoMsg): _93.Period;
                toProto(message: _93.Period): Uint8Array;
                toProtoMsg(message: _93.Period): _93.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _93.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PeriodicVestingAccount;
                fromJSON(object: any): _93.PeriodicVestingAccount;
                toJSON(message: _93.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_93.PeriodicVestingAccount>): _93.PeriodicVestingAccount;
                fromAmino(object: _93.PeriodicVestingAccountAmino): _93.PeriodicVestingAccount;
                toAmino(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _93.PeriodicVestingAccountAminoMsg): _93.PeriodicVestingAccount;
                toAminoMsg(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _93.PeriodicVestingAccountProtoMsg): _93.PeriodicVestingAccount;
                toProto(message: _93.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _93.PeriodicVestingAccount): _93.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _93.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PermanentLockedAccount;
                fromJSON(object: any): _93.PermanentLockedAccount;
                toJSON(message: _93.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_93.PermanentLockedAccount>): _93.PermanentLockedAccount;
                fromAmino(object: _93.PermanentLockedAccountAmino): _93.PermanentLockedAccount;
                toAmino(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountAmino;
                fromAminoMsg(object: _93.PermanentLockedAccountAminoMsg): _93.PermanentLockedAccount;
                toAminoMsg(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _93.PermanentLockedAccountProtoMsg): _93.PermanentLockedAccount;
                toProto(message: _93.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _93.PermanentLockedAccount): _93.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _92.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateVestingAccount;
                fromJSON(object: any): _92.MsgCreateVestingAccount;
                toJSON(message: _92.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_92.MsgCreateVestingAccount>): _92.MsgCreateVestingAccount;
                fromAmino(object: _92.MsgCreateVestingAccountAmino): _92.MsgCreateVestingAccount;
                toAmino(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _92.MsgCreateVestingAccountAminoMsg): _92.MsgCreateVestingAccount;
                toAminoMsg(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _92.MsgCreateVestingAccountProtoMsg): _92.MsgCreateVestingAccount;
                toProto(message: _92.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _92.MsgCreateVestingAccount): _92.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _92.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _92.MsgCreateVestingAccountResponse;
                toJSON(_: _92.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_92.MsgCreateVestingAccountResponse>): _92.MsgCreateVestingAccountResponse;
                fromAmino(_: _92.MsgCreateVestingAccountResponseAmino): _92.MsgCreateVestingAccountResponse;
                toAmino(_: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _92.MsgCreateVestingAccountResponseAminoMsg): _92.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCreateVestingAccountResponseProtoMsg): _92.MsgCreateVestingAccountResponse;
                toProto(message: _92.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCreateVestingAccountResponse): _92.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _92.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _92.MsgCreatePermanentLockedAccount;
                toJSON(message: _92.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_92.MsgCreatePermanentLockedAccount>): _92.MsgCreatePermanentLockedAccount;
                fromAmino(object: _92.MsgCreatePermanentLockedAccountAmino): _92.MsgCreatePermanentLockedAccount;
                toAmino(message: _92.MsgCreatePermanentLockedAccount): _92.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _92.MsgCreatePermanentLockedAccountAminoMsg): _92.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _92.MsgCreatePermanentLockedAccount): _92.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _92.MsgCreatePermanentLockedAccountProtoMsg): _92.MsgCreatePermanentLockedAccount;
                toProto(message: _92.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _92.MsgCreatePermanentLockedAccount): _92.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _92.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _92.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _92.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_92.MsgCreatePermanentLockedAccountResponse>): _92.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _92.MsgCreatePermanentLockedAccountResponseAmino): _92.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _92.MsgCreatePermanentLockedAccountResponse): _92.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _92.MsgCreatePermanentLockedAccountResponseAminoMsg): _92.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _92.MsgCreatePermanentLockedAccountResponse): _92.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCreatePermanentLockedAccountResponseProtoMsg): _92.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _92.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCreatePermanentLockedAccountResponse): _92.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _92.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _92.MsgCreatePeriodicVestingAccount;
                toJSON(message: _92.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_92.MsgCreatePeriodicVestingAccount>): _92.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _92.MsgCreatePeriodicVestingAccountAmino): _92.MsgCreatePeriodicVestingAccount;
                toAmino(message: _92.MsgCreatePeriodicVestingAccount): _92.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _92.MsgCreatePeriodicVestingAccountAminoMsg): _92.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _92.MsgCreatePeriodicVestingAccount): _92.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _92.MsgCreatePeriodicVestingAccountProtoMsg): _92.MsgCreatePeriodicVestingAccount;
                toProto(message: _92.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _92.MsgCreatePeriodicVestingAccount): _92.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _92.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _92.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _92.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_92.MsgCreatePeriodicVestingAccountResponse>): _92.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _92.MsgCreatePeriodicVestingAccountResponseAmino): _92.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _92.MsgCreatePeriodicVestingAccountResponse): _92.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _92.MsgCreatePeriodicVestingAccountResponseAminoMsg): _92.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _92.MsgCreatePeriodicVestingAccountResponse): _92.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _92.MsgCreatePeriodicVestingAccountResponseProtoMsg): _92.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _92.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _92.MsgCreatePeriodicVestingAccountResponse): _92.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _280.MsgClientImpl;
                };
                bank: {
                    v1beta1: _281.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _282.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _283.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _284.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _285.MsgClientImpl;
                };
                gov: {
                    v1: _286.MsgClientImpl;
                    v1beta1: _287.MsgClientImpl;
                };
                group: {
                    v1: _288.MsgClientImpl;
                };
                nft: {
                    v1beta1: _289.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _290.MsgClientImpl;
                };
                staking: {
                    v1beta1: _291.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _292.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _293.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _4.QueryConfigRequest): Promise<_4.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _7.QueryAccountsRequest): Promise<_7.QueryAccountsResponse>;
                        account(request: _7.QueryAccountRequest): Promise<_7.QueryAccountResponse>;
                        params(request?: _7.QueryParamsRequest): Promise<_7.QueryParamsResponse>;
                        moduleAccounts(request?: _7.QueryModuleAccountsRequest): Promise<_7.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _7.Bech32PrefixRequest): Promise<_7.Bech32PrefixResponse>;
                        addressBytesToString(request: _7.AddressBytesToStringRequest): Promise<_7.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _7.AddressStringToBytesRequest): Promise<_7.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _11.QueryGrantsRequest): Promise<_11.QueryGrantsResponse>;
                        granterGrants(request: _11.QueryGranterGrantsRequest): Promise<_11.QueryGranterGrantsResponse>;
                        granteeGrants(request: _11.QueryGranteeGrantsRequest): Promise<_11.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _16.QueryBalanceRequest): Promise<_16.QueryBalanceResponse>;
                        allBalances(request: _16.QueryAllBalancesRequest): Promise<_16.QueryAllBalancesResponse>;
                        spendableBalances(request: _16.QuerySpendableBalancesRequest): Promise<_16.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _16.QueryTotalSupplyRequest): Promise<_16.QueryTotalSupplyResponse>;
                        supplyOf(request: _16.QuerySupplyOfRequest): Promise<_16.QuerySupplyOfResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        denomMetadata(request: _16.QueryDenomMetadataRequest): Promise<_16.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _16.QueryDenomsMetadataRequest): Promise<_16.QueryDenomsMetadataResponse>;
                        denomOwners(request: _16.QueryDenomOwnersRequest): Promise<_16.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _26.GetNodeInfoRequest): Promise<_26.GetNodeInfoResponse>;
                            getSyncing(request?: _26.GetSyncingRequest): Promise<_26.GetSyncingResponse>;
                            getLatestBlock(request?: _26.GetLatestBlockRequest): Promise<_26.GetLatestBlockResponse>;
                            getBlockByHeight(request: _26.GetBlockByHeightRequest): Promise<_26.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _26.GetLatestValidatorSetRequest): Promise<_26.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _26.GetValidatorSetByHeightRequest): Promise<_26.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _40.QueryValidatorOutstandingRewardsRequest): Promise<_40.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _40.QueryValidatorCommissionRequest): Promise<_40.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _40.QueryValidatorSlashesRequest): Promise<_40.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _40.QueryDelegationRewardsRequest): Promise<_40.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _40.QueryDelegationTotalRewardsRequest): Promise<_40.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _40.QueryDelegatorWithdrawAddressRequest): Promise<_40.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _40.QueryCommunityPoolRequest): Promise<_40.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _44.QueryEvidenceRequest): Promise<_44.QueryEvidenceResponse>;
                        allEvidence(request?: _44.QueryAllEvidenceRequest): Promise<_44.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _48.QueryAllowanceRequest): Promise<_48.QueryAllowanceResponse>;
                        allowances(request: _48.QueryAllowancesRequest): Promise<_48.QueryAllowancesResponse>;
                        allowancesByGranter(request: _48.QueryAllowancesByGranterRequest): Promise<_48.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _53.QueryProposalRequest): Promise<_53.QueryProposalResponse>;
                        proposals(request: _53.QueryProposalsRequest): Promise<_53.QueryProposalsResponse>;
                        vote(request: _53.QueryVoteRequest): Promise<_53.QueryVoteResponse>;
                        votes(request: _53.QueryVotesRequest): Promise<_53.QueryVotesResponse>;
                        params(request: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        deposit(request: _53.QueryDepositRequest): Promise<_53.QueryDepositResponse>;
                        deposits(request: _53.QueryDepositsRequest): Promise<_53.QueryDepositsResponse>;
                        tallyResult(request: _53.QueryTallyResultRequest): Promise<_53.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _57.QueryProposalRequest): Promise<_57.QueryProposalResponse>;
                        proposals(request: _57.QueryProposalsRequest): Promise<_57.QueryProposalsResponse>;
                        vote(request: _57.QueryVoteRequest): Promise<_57.QueryVoteResponse>;
                        votes(request: _57.QueryVotesRequest): Promise<_57.QueryVotesResponse>;
                        params(request: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        deposit(request: _57.QueryDepositRequest): Promise<_57.QueryDepositResponse>;
                        deposits(request: _57.QueryDepositsRequest): Promise<_57.QueryDepositsResponse>;
                        tallyResult(request: _57.QueryTallyResultRequest): Promise<_57.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _61.QueryGroupInfoRequest): Promise<_61.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _61.QueryGroupPolicyInfoRequest): Promise<_61.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _61.QueryGroupMembersRequest): Promise<_61.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _61.QueryGroupsByAdminRequest): Promise<_61.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _61.QueryGroupPoliciesByGroupRequest): Promise<_61.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _61.QueryGroupPoliciesByAdminRequest): Promise<_61.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _61.QueryProposalRequest): Promise<_61.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _61.QueryProposalsByGroupPolicyRequest): Promise<_61.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _61.QueryVoteByProposalVoterRequest): Promise<_61.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _61.QueryVotesByProposalRequest): Promise<_61.QueryVotesByProposalResponse>;
                        votesByVoter(request: _61.QueryVotesByVoterRequest): Promise<_61.QueryVotesByVoterResponse>;
                        groupsByMember(request: _61.QueryGroupsByMemberRequest): Promise<_61.QueryGroupsByMemberResponse>;
                        tallyResult(request: _61.QueryTallyResultRequest): Promise<_61.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        inflation(request?: _66.QueryInflationRequest): Promise<_66.QueryInflationResponse>;
                        annualProvisions(request?: _66.QueryAnnualProvisionsRequest): Promise<_66.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _71.QueryBalanceRequest): Promise<_71.QueryBalanceResponse>;
                        owner(request: _71.QueryOwnerRequest): Promise<_71.QueryOwnerResponse>;
                        supply(request: _71.QuerySupplyRequest): Promise<_71.QuerySupplyResponse>;
                        nFTs(request: _71.QueryNFTsRequest): Promise<_71.QueryNFTsResponse>;
                        nFT(request: _71.QueryNFTRequest): Promise<_71.QueryNFTResponse>;
                        class(request: _71.QueryClassRequest): Promise<_71.QueryClassResponse>;
                        classes(request?: _71.QueryClassesRequest): Promise<_71.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        subspaces(request?: _76.QuerySubspacesRequest): Promise<_76.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        signingInfo(request: _78.QuerySigningInfoRequest): Promise<_78.QuerySigningInfoResponse>;
                        signingInfos(request?: _78.QuerySigningInfosRequest): Promise<_78.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _83.QueryValidatorsRequest): Promise<_83.QueryValidatorsResponse>;
                        validator(request: _83.QueryValidatorRequest): Promise<_83.QueryValidatorResponse>;
                        validatorDelegations(request: _83.QueryValidatorDelegationsRequest): Promise<_83.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _83.QueryValidatorUnbondingDelegationsRequest): Promise<_83.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _83.QueryDelegationRequest): Promise<_83.QueryDelegationResponse>;
                        unbondingDelegation(request: _83.QueryUnbondingDelegationRequest): Promise<_83.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _83.QueryDelegatorDelegationsRequest): Promise<_83.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _83.QueryDelegatorUnbondingDelegationsRequest): Promise<_83.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _83.QueryRedelegationsRequest): Promise<_83.QueryRedelegationsResponse>;
                        delegatorValidators(request: _83.QueryDelegatorValidatorsRequest): Promise<_83.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _83.QueryDelegatorValidatorRequest): Promise<_83.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _83.QueryHistoricalInfoRequest): Promise<_83.QueryHistoricalInfoResponse>;
                        pool(request?: _83.QueryPoolRequest): Promise<_83.QueryPoolResponse>;
                        params(request?: _83.QueryParamsRequest): Promise<_83.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _87.SimulateRequest): Promise<_87.SimulateResponse>;
                        getTx(request: _87.GetTxRequest): Promise<_87.GetTxResponse>;
                        broadcastTx(request: _87.BroadcastTxRequest): Promise<_87.BroadcastTxResponse>;
                        getTxsEvent(request: _87.GetTxsEventRequest): Promise<_87.GetTxsEventResponse>;
                        getBlockWithTxs(request: _87.GetBlockWithTxsRequest): Promise<_87.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _89.QueryCurrentPlanRequest): Promise<_89.QueryCurrentPlanResponse>;
                        appliedPlan(request: _89.QueryAppliedPlanRequest): Promise<_89.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _89.QueryUpgradedConsensusStateRequest): Promise<_89.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _89.QueryModuleVersionsRequest): Promise<_89.QueryModuleVersionsResponse>;
                        authority(request?: _89.QueryAuthorityRequest): Promise<_89.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _245.LCDQueryClient;
                };
                authz: {
                    v1beta1: _246.LCDQueryClient;
                };
                bank: {
                    v1beta1: _247.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _248.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _249.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _250.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _251.LCDQueryClient;
                };
                gov: {
                    v1: _252.LCDQueryClient;
                    v1beta1: _253.LCDQueryClient;
                };
                group: {
                    v1: _254.LCDQueryClient;
                };
                mint: {
                    v1beta1: _255.LCDQueryClient;
                };
                nft: {
                    v1beta1: _256.LCDQueryClient;
                };
                params: {
                    v1beta1: _257.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _258.LCDQueryClient;
                };
                staking: {
                    v1beta1: _259.LCDQueryClient;
                };
                tx: {
                    v1beta1: _260.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _261.LCDQueryClient;
                };
            };
        }>;
    };
}
