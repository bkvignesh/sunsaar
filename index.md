---
layout: default
title: Home
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D84Q9BCVTK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D84Q9BCVTK');
</script>

# Welcome to SunSaar
## This is an upcoming blog about solar energy in India

---

## ✍️ Latest Posts

{% for post in site.posts limit: 5 %}
- [{{ post.title }}]({{ post.url | relative_url }}) <br>
  <small><code>{{ post.date | date: "%b %d, %Y" }}</code></small>
{% endfor %}

---