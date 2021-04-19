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
                <div style="background-color: lightblue; width: 50%">
                <!-- The image size is 500px*320px -->
                <img src="./{{ post.category }}.gif" style="width:250px;height:160px;">
                <a href="{{ post.category }}">{{ post.category }}</a>
                </div>
                <br>
            {% endif %}
        {% endfor %}
    {% endfor %}
</ul>