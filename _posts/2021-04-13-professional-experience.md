---
layout: professional-experience
permalink: /professional-experience
category: professional-experience
description: These are my Professional experiences
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