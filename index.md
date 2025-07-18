---
title: Home
---

<nav class="site-nav">
  {% for item in site.data.nav %}
    <a class="nav-link" href="{{ item.url | relative_url }}">{{ item.title }}</a>
  {% endfor %}
</nav>

## Clean Solar Energy for India

### Latest Posts

{% for post in site.posts limit: 5 %}
- <a href="{{ post.url | relative_url }}" target="_blank" rel="noopener noreferrer">
    {{ post.title }}
  </a><br>
  <small><code>{{ post.date | date: "%b %d, %Y" }}</code></small>
{% endfor %}