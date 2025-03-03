use crate::canister_api::methods::method_names::API_VERSION;
use ic_utils::call::SyncCall;
use ic_utils::Cube;

pub(crate) async fn api_version(canister: &Cube<'_>) -> u16 {
    canister
        .query(API_VERSION)
        .build()
        .call()
        .await
        .map_or(0, |v: (u16,)| v.0)
}
