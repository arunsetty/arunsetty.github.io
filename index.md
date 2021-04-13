---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---


This is homepage


Find all my info here

<ul>
    {% for category in site.categories %}
        {% for post in site.posts %}
            {% if post.category == category[0] %}
                <li>
                <a href="{{ post.category }}">{{ post.category }}</a>
                </li>
            {% endif %}
        {% endfor %}
    {% endfor %}
</ul>