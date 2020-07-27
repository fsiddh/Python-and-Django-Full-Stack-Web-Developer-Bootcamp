from django import forms

class FormName(forms.Form):
    name = forms.CharField()
    email = forms.CharField()
    text = forms.CharField(widget=forms.Textarea)