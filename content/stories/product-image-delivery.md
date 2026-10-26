---
title: Product images that stay sharp when customers zoom
summary: Moving from wsrv.nl to self-hosted imgproxy, with CDN caching and staged image loading to balance fast browsing with full-resolution product detail.
# Placeholder within the Viceseason period; confirm before finalizing chronology.
timeline_date: 2023-06-01
timeline_summary: Sharp product detail without slowing the initial image load.
timeline_detail: imgproxy, CDN caching, staged loading
topics: [performance, image-delivery, infrastructure]
status: Image delivery
stack:
  - imgproxy
  - CDN caching
  - Browser caching
related_work:
  - viceseason
related_projects:
  - viceseason-store
---

The request started with a specific complaint: the owner could see pixels when zooming into product photos on an iPhone.

Images that were acceptable for ordinary browsing did not preserve enough detail for that interaction. Sending larger images immediately would address one part of the problem while making the initial page load heavier.

I worked on separating those two needs: something quick to show first, and a sharper image for closer inspection.

## Separate initial display from higher-resolution detail

The image component used a compressed source for the initial image, then loaded a higher-resolution version in the background. That let the delivery path treat initial browsing and detailed inspection differently.

The image work evolved over several iterations. We used wsrv.nl for processing, then later moved to self-hosted imgproxy. The later implementation generated signed transformation URLs rather than exposing arbitrary transformation parameters as an unsigned URL.

## Reuse processed variants

We put a caching CDN in front of the processor. A missing variant could be processed and converted, then served from cache on subsequent requests while that cached response remained valid.

Browser caching handled another part of the path: returning to an image should not require downloading it again when the browser already had a usable cached response.

The goal was not simply smaller images. It was keeping browsing responsive without making product detail disappear when someone wanted a closer look.
