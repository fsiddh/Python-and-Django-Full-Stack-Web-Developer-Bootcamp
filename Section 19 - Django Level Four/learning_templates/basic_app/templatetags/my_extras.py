from django import template
register = template.Library()

@register.filter(name='cutout')
def cutout(value, arg):
    return value.replace(arg, '')
