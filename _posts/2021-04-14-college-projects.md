---
layout: college-projects
permalink: /college-projects
category: college-projects
description: These are my college projects
---


<ul>
    {% for post in site.posts %}
        {% if post.post_category == page.category %}
            <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>