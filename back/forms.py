from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(max_length=50, label ='',
        widget=forms.TextInput(attrs={'class': 'form-group form-control', 'placeholder':'Username'}),
        error_messages={'required': "Enter a valid username"})
    password = forms.CharField(max_length=256, label='',
        widget=forms.TextInput(attrs={'class': 'form-group form-control', 'placeholder':'Password'}),
        error_messages={'required': 'Enter a valid password'})