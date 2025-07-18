---
layout: default
title: Home
---

# Clean Solar Energy for India
## ✍️ Latest Posts

{% for post in site.posts limit: 5 %}
- <a href="{{ post.url | relative_url }}" target="_blank" rel="noopener noreferrer">
    {{ post.title }}
  </a><br>
  <small><code>{{ post.date | date: "%b %d, %Y" }}</code></small>
{% endfor %}

---