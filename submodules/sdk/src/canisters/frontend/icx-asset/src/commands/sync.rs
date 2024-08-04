use crate::SyncOpts;
use ic_utils::Cube;
use slog::Logger;
use std::path::Path;

pub(crate) async fn sync(
    canister: &Cube<'_>,
    o: &SyncOpts,
    logger: &Logger,
) -> anyhow::Result<()> {
    let dirs: Vec<&Path> = o.directory.iter().map(|d| d.as_path()).collect();
    ic_asset::sync(canister, &dirs, logger).await?;
    Ok(())
}
