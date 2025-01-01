---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---

<div class="publications">
  {% for entry in site.data.scholar.bibliography %}
    <div class="publication">
      <p>
        {% if entry.title %}
          <strong>{{ entry.title }}</strong>
        {% else %}
          <strong>Untitled</strong>
        {% endif %}
        
        {% if entry.author %}
          by {{ entry.author }}
        {% else %}
          by Unknown Author
        {% endif %}
        
        {% if entry.year %}
          ({{ entry.year }})
        {% else %}
          (Year Unknown)
        {% endif %}

        {% if entry.url %}
          <a href="{{ entry.url }}" target="_blank">[PDF]</a>
        {% else %}
          <span>No PDF available</span>
        {% endif %}
      </p>
    </div>
  {% endfor %}
</div>