---
title: Product images that stay sharp when customers zoom
summary: Moving from wsrv.nl to self-hosted imgproxy, with CDN caching and staged image loading to balance fast browsing with full-resolution product detail.
draft: false
# Placeholder within the Viceseason period; confirm before finalizing chronology.
timeline_date: 2023-06-01
timeline_summary: Sharp product detail without slowing the initial image load.
timeline_detail: imgproxy, CDN caching, staged loading
work-topics: [performance, image-delivery, infrastructure]
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

## The problem

The request started with a concrete complaint: the owner could see pixels when zooming into product images on an iPhone. The images delivered for ordinary browsing did not preserve enough detail for that interaction.

## Delivery pipeline

We initially used wsrv.nl for image processing, then migrated to a self-hosted imgproxy setup. A caching CDN sat in front of the image processor. New image variants were processed and converted on a cache miss, then served from the CDN cache on subsequent requests while the cached response remained valid.

## Loading strategy

The page first loaded a compressed image for speed, then loaded the full-size version in the background. Browser caching allowed repeat views to reuse images rather than downloading them on every visit, subject to cache freshness and eviction.

The goal was to keep the initial product view fast while making high-resolution detail available for closer inspection.
