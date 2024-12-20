/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
import IconExternalLink from "@theme/IconExternalLink";
import IconDownload from "@site/static/img/svgIcons/download.svg";
import { EditIcon } from "./EditIcon";

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  isDownload,
  ...props
}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });

  let markup = null;

  if (href && !isInternalUrl(href)) {
    markup = (
      <span className="lg:inline-flex items-center gap-1">
        {label}
        <IconExternalLink />
      </span>
    );
  } else if (isDownload) {
    markup = (
      <span className="lg:inline-flex items-center gap-1">
        {label}
        <IconDownload className="w-5 h-5 align-text-bottom" />
      </span>
    );
  } else {
    markup = label;
  }

  return (
    <Link
      target="_blank"
      className="footer__link-item"
      style={{
        color: "white",
        fontWeight: "bold",
      }}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {markup}
    </Link>
  );
}

function Footer({ editPath }) {
  const { footer } = useThemeConfig();
  const { copyright, links = [] } = footer || {};

  if (!footer) {
    return null;
  }

  const mediaLinks = links
    .filter((link) => link.title === "SocialMedia")
    .map((link) => link.items)[0];
  const nonMediaLinks = links.filter((link) => link.title !== "SocialMedia");
  return (
    <div className={styles.container}>
      <footer
        className={clsx("footer", {
          "footer--dark": footer.style === "dark",
        })}
      >
        <div className={styles.editButtonContainer}>
          {editPath && (
            <Link
              className="absolute -top-8 right-0 text-white hover:text-white-60 hover:no-underline tw-title-navigation-on-page rounded-full py-1 px-3 bg-black-60 backdrop-blur-2xl -translate-y-1/2 inline-flex items-center gap-1"
              href={editPath}
            >
              <EditIcon></EditIcon>
              Edit this page
            </Link>
          )}
        </div>
        <div className={styles.footerLinksContainer}>
          {nonMediaLinks.map((linkItem, i) => (
            <div key={i} className={styles.footerLinkCol}>
              {linkItem.items.map((item) => (
                <p key={item.href || item.to} className={styles.footerLink}>
                  <FooterLink {...item} />
                </p>
              ))}
            </div>
          ))}
          <form
            className="text-white md:max-w-[40%] md:ml-auto mt-10 md:mt-0"
            method="post"
            action="https://thebigfile.us14.list-manage.com/subscribe/post?u=c077aedaaac14cbbf2fb9522b&amp;id=38a1cc340f&amp;f_id=00647ae0f0"
          >
            <p className="tw-lead-sm mb-3 md:mb-5">
              Sign up for email updates to keep up to date with advancements on the BigFile
            </p>
            <div className="flex gap-3 flex-col md:flex-row items-start">
              <input
                type="email"
                name="EMAIL"
                placeholder="Email"
                className="input-text input-text-white flex-1 w-full md:w-auto"
                required
              />
              <button type="submit" className="button-white">
                Get Updates!
              </button>
            </div>
          </form>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.legalContainer}>
            <div className={styles.legalLinkContainer}>
              <div className={styles.legalLink}>
                <Link
                  style={{ color: "white", fontWeight: "bold" }}
                  to={"https://thebigfile.tech/privacy-policy"}
                >
                  Privacy Policy
                </Link>
              </div>
              <div className={styles.legalLink}>
                <Link
                  style={{ color: "white", fontWeight: "bold" }}
                  to={"https://thebigfile.tech/terms-of-use"}
                >
                  Terms of Use
                </Link>
              </div>
            </div>
            {copyright ? (
              <div
                className={styles.legalCopyright}
                style={{ color: "white" }}
                // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
          <div className={styles.mediaLinksContainer}>
            {mediaLinks.map((item) => (
              <div key={item.href || item.to} className={styles.mediaLinks}>
                <Link to={item.to} aria-label={`Go to ${item.label}`}>
                  <img src={item.icon} alt={item.label} loading="lazy" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerPadding} />
      </footer>
    </div>
  );
}

export default React.memo(Footer);
