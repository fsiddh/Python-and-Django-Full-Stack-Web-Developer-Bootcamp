from django import template
register = template.Library()

@register.filter
def cutout(value, arg):
    return value.replace(arg, '')
