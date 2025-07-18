---
title: Home
---

<nav class="site-nav">
  <ul>
    {% for item in site.data.nav %}
      <li>
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
      </li>
    {% endfor %}
  </ul>
</nav>

# SunSaar: Clean Solar Energy for India

## ✍️ Latest Posts

{% for post in site.posts limit: 5 %}
- <a href="{{ post.url | relative_url }}" target="_blank" rel="noopener noreferrer">
    {{ post.title }}
  </a><br>
  <small><code>{{ post.date | date: "%b %d, %Y" }}</code></small>
{% endfor %}