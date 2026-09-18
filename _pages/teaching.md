---
layout: page
permalink: /teaching/
title: teaching
description: Teaching experience at the University of Iowa.
nav: true
nav_order: 3
---

**Graduate Certificate in College Teaching** (Physical and Mathematical Sciences), University of Iowa, 2025.

{% assign teaching_years = site.data.teaching | group_by: "year" | sort: "name" | reverse %}

<div class="publications teaching">
  {% for teaching_year in teaching_years %}
    <h2 class="bibliography">{{ teaching_year.name }}</h2>
    <ol class="bibliography">
      {% for entry in teaching_year.items %}
        <li>
          <div class="row">
            <div class="col-md-2 abbr">
              {% if entry.role_short != entry.role %}
                <abbr class="badge teaching-role teaching-role--{{ entry.role | slugify }}" title="{{ entry.role }}">{{ entry.role_short }}</abbr>
              {% else %}
                <span class="badge teaching-role teaching-role--{{ entry.role | slugify }}">{{ entry.role_short }}</span>
              {% endif %}
            </div>
            <div class="col-md-10">
              <div class="title">
                {% if entry.url %}<a href="{{ entry.url }}">{{ entry.course }}</a>{% else %}{{ entry.course }}{% endif %}
              </div>
              <div class="periodical">{{ entry.term }}</div>
              <p class="teaching-description">{{ entry.description }}</p>
            </div>
          </div>
        </li>
      {% endfor %}
    </ol>
  {% endfor %}
</div>
