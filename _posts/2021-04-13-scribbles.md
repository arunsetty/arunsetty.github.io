---
layout: scribbles
permalink: /scribbles
category: scribbles
description: This is my blog
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