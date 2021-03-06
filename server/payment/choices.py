"""Payment Choices"""


charge_type_choices = (
	('credit', 'credit'),
	('debit', 'debit')
)

DEFAULT_CHARGE_TYPE = 'debit'

transaction_type_choices = (
	('order', 'order'),
	('withdrawal', 'withdrawal')
)

DEFAULT_TRANSACTION_TYPE = 'order'


countries_to_currencies = {
	'ghana': 'GHS',
	'nigeria': 'NGN',
	'kenya': 'KES',
	'us': 'USD'
}
