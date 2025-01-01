---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 1
---


<!-- _pages/publications.md -->
<!-- <div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div> -->

<div class="publications">
  {% for entry in site.scholar.bibliography %}
    <div class="publication">
      <p>
        {{ entry | cite }}
        {% if entry.url %}
          <a href="{{ entry.url }}" target="_blank">[PDF]</a>
        {% endif %}
      </p>
    </div>
  {% endfor %}
</div>