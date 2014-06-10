---
layout: default
---

# Ali Sinan Köksal

387 Soda Hall MC 1776  
Computer Science Division  
University of California, Berkeley  
Berkeley, CA 94720-1776  
[koksal@cs.berkeley.edu]

## About

I'm a third-year graduate student in computer science at [UC Berkeley], advised
by [Prof. Ras Bodik][bodik].

I have completed my B.Sc. and M.Sc. degrees at [EPFL], where my advisor was
[Prof.  Viktor Kuncak][kuncak].


## Publications

{% for paper in site.data.publications %}
<p>
<div>
<a href="{{ paper.link }}">{{ paper.title }}</a>
</div>
<div>{{ paper.authors }}</div>
<div>{{ paper.confLong }} ({{ paper.confShort }}), {{ paper.year }}</div>
{% if paper.slides %}
[<a href="{{ paper.slides }}">slides</a>]
{% endif %}
{% if paper.code %}
[<a href="{{ paper.code }}">source</a>]
{% endif %}

</p>
{% endfor %}

[koksal@cs.berkeley.edu]: mailto:koksal@cs.berkeley.edu
[EPFL]: http://www.epfl.ch
[UC Berkeley]: http://www.eecs.berkeley.edu
[bodik]: http://www.cs.berkeley.edu/~bodik
[kuncak]: http://lara.epfl.ch/~kuncak
