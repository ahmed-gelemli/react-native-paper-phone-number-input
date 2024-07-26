interface Country {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
  length: number;
}

export const countries: Country[] = [
  { name: 'Afghanistan', flag: '🇦🇫', code: 'AF', dialCode: '+93', length: 9 },
  { name: 'Åland Islands', flag: '🇦🇽', code: 'AX', dialCode: '+358', length: 15 },
  { name: 'Albania', flag: '🇦🇱', code: 'AL', dialCode: '+355', length: 9 },
  { name: 'Algeria', flag: '🇩🇿', code: 'DZ', dialCode: '+213', length: 9 },
  { name: 'American Samoa', flag: '🇦🇸', code: 'AS', dialCode: '+1684', length: 10 },
  { name: 'Andorra', flag: '🇦🇩', code: 'AD', dialCode: '+376', length: 6 },
  { name: 'Angola', flag: '🇦🇴', code: 'AO', dialCode: '+244', length: 9 },
  { name: 'Anguilla', flag: '🇦🇮', code: 'AI', dialCode: '+1264', length: 10 },
  { name: 'Antarctica', flag: '🇦🇶', code: 'AQ', dialCode: '+672', length: 6 },
  { name: 'Antigua and Barbuda', flag: '🇦🇬', code: 'AG', dialCode: '+1268', length: 10 },
  { name: 'Argentina', flag: '🇦🇷', code: 'AR', dialCode: '+54', length: 8 },
  { name: 'Armenia', flag: '🇦🇲', code: 'AM', dialCode: '+374', length: 6 },
  { name: 'Aruba', flag: '🇦🇼', code: 'AW', dialCode: '+297', length: 7 },
  { name: 'Australia', flag: '🇦🇺', code: 'AU', dialCode: '+61', length: 9 },
  { name: 'Austria', flag: '🇦🇹', code: 'AT', dialCode: '+43', length: 11 },
  { name: 'Azerbaijan', flag: '🇦🇿', code: 'AZ', dialCode: '+994', length: 9 },
  { name: 'Bahamas', flag: '🇧🇸', code: 'BS', dialCode: '+1242', length: 10 },
  { name: 'Bahrain', flag: '🇧🇭', code: 'BH', dialCode: '+973', length: 8 },
  { name: 'Bangladesh', flag: '🇧🇩', code: 'BD', dialCode: '+880', length: 10 },
  { name: 'Barbados', flag: '🇧🇧', code: 'BB', dialCode: '+1246', length: 10 },
  { name: 'Belarus', flag: '🇧🇾', code: 'BY', dialCode: '+375', length: 9 },
  { name: 'Belgium', flag: '🇧🇪', code: 'BE', dialCode: '+32', length: 9 },
  { name: 'Belize', flag: '🇧🇿', code: 'BZ', dialCode: '+501', length: 7 },
  { name: 'Benin', flag: '🇧🇯', code: 'BJ', dialCode: '+229', length: 8 },
  { name: 'Bermuda', flag: '🇧🇲', code: 'BM', dialCode: '+1441', length: 10 },
  { name: 'Bhutan', flag: '🇧🇹', code: 'BT', dialCode: '+975', length: 7 },
  { name: 'Bolivia, Plurinational State of bolivia', flag: '🇧🇴', code: 'BO', dialCode: '+591', length: 9 },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦', code: 'BA', dialCode: '+387', length: 8 },
  { name: 'Botswana', flag: '🇧🇼', code: 'BW', dialCode: '+267', length: 7 },
  { name: 'Bouvet Island', flag: '🇧🇻', code: 'BV', dialCode: '+47', length: 15 },
  { name: 'Brazil', flag: '🇧🇷', code: 'BR', dialCode: '+55', length: 11 },
  { name: 'British Indian Ocean Territory', flag: '🇮🇴', code: 'IO', dialCode: '+246', length: 7 },
  { name: 'Brunei Darussalam', flag: '🇧🇳', code: 'BN', dialCode: '+673', length: 7 },
  { name: 'Bulgaria', flag: '🇧🇬', code: 'BG', dialCode: '+359', length: 9 },
  { name: 'Burkina Faso', flag: '🇧🇫', code: 'BF', dialCode: '+226', length: 8 },
  { name: 'Burundi', flag: '🇧🇮', code: 'BI', dialCode: '+257', length: 8 },
  { name: 'Cambodia', flag: '🇰🇭', code: 'KH', dialCode: '+855', length: 9 },
  { name: 'Cameroon', flag: '🇨🇲', code: 'CM', dialCode: '+237', length: 9 },
  { name: 'Canada', flag: '🇨🇦', code: 'CA', dialCode: '+1', length: 10 },
  { name: 'Cape Verde', flag: '🇨🇻', code: 'CV', dialCode: '+238', length: 7 },
  { name: 'Cayman Islands', flag: '🇰🇾', code: 'KY', dialCode: '+345', length: 7 },
  { name: 'Central African Republic', flag: '🇨🇫', code: 'CF', dialCode: '+236', length: 8 },
  { name: 'Chad', flag: '🇹🇩', code: 'TD', dialCode: '+235', length: 6 },
  { name: 'Chile', flag: '🇨🇱', code: 'CL', dialCode: '+56', length: 9 },
  { name: 'China', flag: '🇨🇳', code: 'CN', dialCode: '+86', length: 11 },
  { name: 'Christmas Island', flag: '🇨🇽', code: 'CX', dialCode: '+61', length: 9 },
  { name: 'Cocos (Keeling) Islands', flag: '🇨🇨', code: 'CC', dialCode: '+61', length: 10 },
  { name: 'Colombia', flag: '🇨🇴', code: 'CO', dialCode: '+57', length: 10 },
  { name: 'Comoros', flag: '🇰🇲', code: 'KM', dialCode: '+269', length: 7 },
  { name: 'Congo', flag: '🇨🇬', code: 'CG', dialCode: '+242', length: 9 },
  { name: 'Congo, The Democratic Republic of the Congo', flag: '🇨🇩', code: 'CD', dialCode: '+243', length: 7 },
  { name: 'Cook Islands', flag: '🇨🇰', code: 'CK', dialCode: '+682', length: 5 },
  { name: 'Costa Rica', flag: '🇨🇷', code: 'CR', dialCode: '+506', length: 8 },
  { name: "Cote d'Ivoire", flag: '🇨🇮', code: 'CI', dialCode: '+225', length: 8 },
  { name: 'Croatia', flag: '🇭🇷', code: 'HR', dialCode: '+385', length: 9 },
  { name: 'Cuba', flag: '🇨🇺', code: 'CU', dialCode: '+53', length: 8 },
  { name: 'Cyprus', flag: '🇨🇾', code: 'CY', dialCode: '+357', length: 8 },
  { name: 'Czech Republic', flag: '🇨🇿', code: 'CZ', dialCode: '+420', length: 9 },
  { name: 'Denmark', flag: '🇩🇰', code: 'DK', dialCode: '+45', length: 8 },
  { name: 'Djibouti', flag: '🇩🇯', code: 'DJ', dialCode: '+253', length: 10 },
  { name: 'Dominica', flag: '🇩🇲', code: 'DM', dialCode: '+1767', length: 10 },
  { name: 'Dominican Republic', flag: '🇩🇴', code: 'DO', dialCode: '+1849', length: 10 },
  { name: 'Ecuador', flag: '🇪🇨', code: 'EC', dialCode: '+593', length: 9 },
  { name: 'Egypt', flag: '🇪🇬', code: 'EG', dialCode: '+20', length: 10 },
  { name: 'El Salvador', flag: '🇸🇻', code: 'SV', dialCode: '+503', length: 8 },
  { name: 'Equatorial Guinea', flag: '🇬🇶', code: 'GQ', dialCode: '+240', length: 9 },
  { name: 'Eritrea', flag: '🇪🇷', code: 'ER', dialCode: '+291', length: 7 },
  { name: 'Estonia', flag: '🇪🇪', code: 'EE', dialCode: '+372', length: 8 },
  { name: 'Ethiopia', flag: '🇪🇹', code: 'ET', dialCode: '+251', length: 9 },
  { name: 'Falkland Islands (Malvinas)', flag: '🇫🇰', code: 'FK', dialCode: '+500', length: 5 },
  { name: 'Faroe Islands', flag: '🇫🇴', code: 'FO', dialCode: '+298', length: 5 },
  { name: 'Fiji', flag: '🇫🇯', code: 'FJ', dialCode: '+679', length: 7 },
  { name: 'Finland', flag: '🇫🇮', code: 'FI', dialCode: '+358', length: 15 },
  { name: 'France', flag: '🇫🇷', code: 'FR', dialCode: '+33', length: 9 },
  { name: 'French Guiana', flag: '🇬🇫', code: 'GF', dialCode: '+594', length: 9 },
  { name: 'French Polynesia', flag: '🇵🇫', code: 'PF', dialCode: '+689', length: 8 },
  { name: 'French Southern Territories', flag: '🇹🇫', code: 'TF', dialCode: '+262', length: 10 },
  { name: 'Gabon', flag: '🇬🇦', code: 'GA', dialCode: '+241', length: 7 },
  { name: 'Gambia', flag: '🇬🇲', code: 'GM', dialCode: '+220', length: 7 },
  { name: 'Georgia', flag: '🇬🇪', code: 'GE', dialCode: '+995', length: 9 },
  { name: 'Germany', flag: '🇩🇪', code: 'DE', dialCode: '+49', length: 10 },
  { name: 'Ghana', flag: '🇬🇭', code: 'GH', dialCode: '+233', length: 9 },
  { name: 'Gibraltar', flag: '🇬🇮', code: 'GI', dialCode: '+350', length: 8 },
  { name: 'Greece', flag: '🇬🇷', code: 'GR', dialCode: '+30', length: 10 },
  { name: 'Greenland', flag: '🇬🇱', code: 'GL', dialCode: '+299', length: 6 },
  { name: 'Grenada', flag: '🇬🇩', code: 'GD', dialCode: '+1473', length: 10 },
  { name: 'Guadeloupe', flag: '🇬🇵', code: 'GP', dialCode: '+590', length: 9 },
  { name: 'Guam', flag: '🇬🇺', code: 'GU', dialCode: '+1671', length: 10 },
  { name: 'Guatemala', flag: '🇬🇹', code: 'GT', dialCode: '+502', length: 8 },
  { name: 'Guernsey', flag: '🇬🇬', code: 'GG', dialCode: '+44', length: 10 },
  { name: 'Guinea', flag: '🇬🇳', code: 'GN', dialCode: '+224', length: 9 },
  { name: 'Guinea-Bissau', flag: '🇬🇼', code: 'GW', dialCode: '+245', length: 9 },
  { name: 'Guyana', flag: '🇬🇾', code: 'GY', dialCode: '+592', length: 7 },
  { name: 'Haiti', flag: '🇭🇹', code: 'HT', dialCode: '+509', length: 8 },
  { name: 'Heard Island and Mcdonald Islands', flag: '🇭🇲', code: 'HM', dialCode: '+672', length: 15 },
  { name: 'Holy See (Vatican City State)', flag: '🇻🇦', code: 'VA', dialCode: '+379', length: 10 },
  { name: 'Honduras', flag: '🇭🇳', code: 'HN', dialCode: '+504', length: 8 },
  { name: 'Hong Kong', flag: '🇭🇰', code: 'HK', dialCode: '+852', length: 8 },
  { name: 'Hungary', flag: '🇭🇺', code: 'HU', dialCode: '+36', length: 9 },
  { name: 'Iceland', flag: '🇮🇸', code: 'IS', dialCode: '+354', length: 7 },
  { name: 'India', flag: '🇮🇳', code: 'IN', dialCode: '+91', length: 10 },
  { name: 'Indonesia', flag: '🇮🇩', code: 'ID', dialCode: '+62', length: 11 },
  { name: 'Iran, Islamic Republic of Persian Gulf', flag: '🇮🇷', code: 'IR', dialCode: '+98', length: 11 },
  { name: 'Iraq', flag: '🇮🇶', code: 'IQ', dialCode: '+964', length: 10 },
  { name: 'Ireland', flag: '🇮🇪', code: 'IE', dialCode: '+353', length: 9 },
  { name: 'Isle of Man', flag: '🇮🇲', code: 'IM', dialCode: '+44', length: 10 },
  { name: 'Israel', flag: '🇮🇱', code: 'IL', dialCode: '+972', length: 9 },
  { name: 'Italy', flag: '🇮🇹', code: 'IT', dialCode: '+39', length: 10 },
  { name: 'Jamaica', flag: '🇯🇲', code: 'JM', dialCode: '+1876', length: 10 },
  { name: 'Japan', flag: '🇯🇵', code: 'JP', dialCode: '+81', length: 15 },
  { name: 'Jersey', flag: '🇯🇪', code: 'JE', dialCode: '+44', length: 10 },
  { name: 'Jordan', flag: '🇯🇴', code: 'JO', dialCode: '+962', length: 9 },
  { name: 'Kazakhstan', flag: '🇰🇿', code: 'KZ', dialCode: '+7', length: 10 },
  { name: 'Kenya', flag: '🇰🇪', code: 'KE', dialCode: '+254', length: 10 },
  { name: 'Kiribati', flag: '🇰🇮', code: 'KI', dialCode: '+686', length: 8 },
  { name: "Korea, Democratic People's Republic of Korea", flag: '🇰🇵', code: 'KP', dialCode: '+850', length: 13 },
  { name: 'Korea, Republic of South Korea', flag: '🇰🇷', code: 'KR', dialCode: '+82', length: 8 },
  { name: 'Kosovo', flag: '🇽🇰', code: 'XK', dialCode: '+383', length: 15 },
  { name: 'Kuwait', flag: '🇰🇼', code: 'KW', dialCode: '+965', length: 8 },
  { name: 'Kyrgyzstan', flag: '🇰🇬', code: 'KG', dialCode: '+996', length: 9 },
  { name: 'Laos', flag: '🇱🇦', code: 'LA', dialCode: '+856', length: 9 },
  { name: 'Latvia', flag: '🇱🇻', code: 'LV', dialCode: '+371', length: 8 },
  { name: 'Lebanon', flag: '🇱🇧', code: 'LB', dialCode: '+961', length: 8 },
  { name: 'Lesotho', flag: '🇱🇸', code: 'LS', dialCode: '+266', length: 8 },
  { name: 'Liberia', flag: '🇱🇷', code: 'LR', dialCode: '+231', length: 9 },
  { name: 'Libyan Arab Jamahiriya', flag: '🇱🇾', code: 'LY', dialCode: '+218', length: 10 },
  { name: 'Liechtenstein', flag: '🇱🇮', code: 'LI', dialCode: '+423', length: 7 },
  { name: 'Lithuania', flag: '🇱🇹', code: 'LT', dialCode: '+370', length: 8 },
  { name: 'Luxembourg', flag: '🇱🇺', code: 'LU', dialCode: '+352', length: 9 },
  { name: 'Macao', flag: '🇲🇴', code: 'MO', dialCode: '+853', length: 8 },
  { name: 'Macedonia', flag: '🇲🇰', code: 'MK', dialCode: '+389', length: 8 },
  { name: 'Madagascar', flag: '🇲🇬', code: 'MG', dialCode: '+261', length: 7 },
  { name: 'Malawi', flag: '🇲🇼', code: 'MW', dialCode: '+265', length: 9 },
  { name: 'Malaysia', flag: '🇲🇾', code: 'MY', dialCode: '+60', length: 7 },
  { name: 'Maldives', flag: '🇲🇻', code: 'MV', dialCode: '+960', length: 7 },
  { name: 'Mali', flag: '🇲🇱', code: 'ML', dialCode: '+223', length: 8 },
  { name: 'Malta', flag: '🇲🇹', code: 'MT', dialCode: '+356', length: 8 },
  { name: 'Marshall Islands', flag: '🇲🇭', code: 'MH', dialCode: '+692', length: 7 },
  { name: 'Martinique', flag: '🇲🇶', code: 'MQ', dialCode: '+596', length: 9 },
  { name: 'Mauritania', flag: '🇲🇷', code: 'MR', dialCode: '+222', length: 8 },
  { name: 'Mauritius', flag: '🇲🇺', code: 'MU', dialCode: '+230', length: 8 },
  { name: 'Mayotte', flag: '🇾🇹', code: 'YT', dialCode: '+262', length: 9 },
  { name: 'Mexico', flag: '🇲🇽', code: 'MX', dialCode: '+52', length: 10 },
  { name: 'Micronesia, Federated States of Micronesia', flag: '🇫🇲', code: 'FM', dialCode: '+691', length: 7 },
  { name: 'Moldova', flag: '🇲🇩', code: 'MD', dialCode: '+373', length: 8 },
  { name: 'Monaco', flag: '🇲🇨', code: 'MC', dialCode: '+377', length: 8 },
  { name: 'Mongolia', flag: '🇲🇳', code: 'MN', dialCode: '+976', length: 8 },
  { name: 'Montenegro', flag: '🇲🇪', code: 'ME', dialCode: '+382', length: 8 },
  { name: 'Montserrat', flag: '🇲🇸', code: 'MS', dialCode: '+1664', length: 10 },
  { name: 'Morocco', flag: '🇲🇦', code: 'MA', dialCode: '+212', length: 9 },
  { name: 'Mozambique', flag: '🇲🇿', code: 'MZ', dialCode: '+258', length: 12 },
  { name: 'Myanmar', flag: '🇲🇲', code: 'MM', dialCode: '+95', length: 15 },
  { name: 'Namibia', flag: '🇳🇦', code: 'NA', dialCode: '+264', length: 7 },
  { name: 'Nauru', flag: '🇳🇷', code: 'NR', dialCode: '+674', length: 7 },
  { name: 'Nepal', flag: '🇳🇵', code: 'NP', dialCode: '+977', length: 10 },
  { name: 'Netherlands', flag: '🇳🇱', code: 'NL', dialCode: '+31', length: 9 },
  { name: 'Netherlands Antilles', flag: '', code: 'AN', dialCode: '+599', length: 15 },
  { name: 'New Caledonia', flag: '🇳🇨', code: 'NC', dialCode: '+687', length: 6 },
  { name: 'New Zealand', flag: '🇳🇿', code: 'NZ', dialCode: '+64', length: 9 },
  { name: 'Nicaragua', flag: '🇳🇮', code: 'NI', dialCode: '+505', length: 8 },
  { name: 'Niger', flag: '🇳🇪', code: 'NE', dialCode: '+227', length: 8 },
  { name: 'Nigeria', flag: '🇳🇬', code: 'NG', dialCode: '+234', length: 8 },
  { name: 'Niue', flag: '🇳🇺', code: 'NU', dialCode: '+683', length: 4 },
  { name: 'Norfolk Island', flag: '🇳🇫', code: 'NF', dialCode: '+672', length: 6 },
  { name: 'Northern Mariana Islands', flag: '🇲🇵', code: 'MP', dialCode: '+1670', length: 7 },
  { name: 'Norway', flag: '🇳🇴', code: 'NO', dialCode: '+47', length: 8 },
  { name: 'Oman', flag: '🇴🇲', code: 'OM', dialCode: '+968', length: 8 },
  { name: 'Pakistan', flag: '🇵🇰', code: 'PK', dialCode: '+92', length: 10 },
  { name: 'Palau', flag: '🇵🇼', code: 'PW', dialCode: '+680', length: 7 },
  { name: 'Palestinian Territory, Occupied', flag: '🇵🇸', code: 'PS', dialCode: '+970', length: 9 },
  { name: 'Panama', flag: '🇵🇦', code: 'PA', dialCode: '+507', length: 8 },
  { name: 'Papua New Guinea', flag: '🇵🇬', code: 'PG', dialCode: '+675', length: 8 },
  { name: 'Paraguay', flag: '🇵🇾', code: 'PY', dialCode: '+595', length: 9 },
  { name: 'Peru', flag: '🇵🇪', code: 'PE', dialCode: '+51', length: 9 },
  { name: 'Philippines', flag: '🇵🇭', code: 'PH', dialCode: '+63', length: 10 },
  { name: 'Pitcairn', flag: '🇵🇳', code: 'PN', dialCode: '+64', length: 9 },
  { name: 'Poland', flag: '🇵🇱', code: 'PL', dialCode: '+48', length: 9 },
  { name: 'Portugal', flag: '🇵🇹', code: 'PT', dialCode: '+351', length: 9 },
  { name: 'Puerto Rico', flag: '🇵🇷', code: 'PR', dialCode: '+1939', length: 10 },
  { name: 'Qatar', flag: '🇶🇦', code: 'QA', dialCode: '+974', length: 8 },
  { name: 'Romania', flag: '🇷🇴', code: 'RO', dialCode: '+40', length: 10 },
  { name: 'Russia', flag: '🇷🇺', code: 'RU', dialCode: '+7', length: 10 },
  { name: 'Rwanda', flag: '🇷🇼', code: 'RW', dialCode: '+250', length: 9 },
  { name: 'Reunion', flag: '🇷🇪', code: 'RE', dialCode: '+262', length: 10 },
  { name: 'Saint Barthelemy', flag: '🇧🇱', code: 'BL', dialCode: '+590', length: 9 },
  { name: 'Saint Helena, Ascension and Tristan Da Cunha', flag: '🇸🇭', code: 'SH', dialCode: '+290', length: 4 },
  { name: 'Saint Kitts and Nevis', flag: '🇰🇳', code: 'KN', dialCode: '+1869', length: 10 },
  { name: 'Saint Lucia', flag: '🇱🇨', code: 'LC', dialCode: '+1758', length: 7 },
  { name: 'Saint Martin', flag: '🇲🇫', code: 'MF', dialCode: '+590', length: 6 },
  { name: 'Saint Pierre and Miquelon', flag: '🇵🇲', code: 'PM', dialCode: '+508', length: 6 },
  { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', code: 'VC', dialCode: '+1784', length: 7 },
  { name: 'Samoa', flag: '🇼🇸', code: 'WS', dialCode: '+685', length: 7 },
  { name: 'San Marino', flag: '🇸🇲', code: 'SM', dialCode: '+378', length: 10 },
  { name: 'Sao Tome and Principe', flag: '🇸🇹', code: 'ST', dialCode: '+239', length: 7 },
  { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA', dialCode: '+966', length: 9 },
  { name: 'Senegal', flag: '🇸🇳', code: 'SN', dialCode: '+221', length: 9 },
  { name: 'Serbia', flag: '🇷🇸', code: 'RS', dialCode: '+381', length: 9 },
  { name: 'Seychelles', flag: '🇸🇨', code: 'SC', dialCode: '+248', length: 7 },
  { name: 'Sierra Leone', flag: '🇸🇱', code: 'SL', dialCode: '+232', length: 8 },
  { name: 'Singapore', flag: '🇸🇬', code: 'SG', dialCode: '+65', length: 8 },
  { name: 'Slovakia', flag: '🇸🇰', code: 'SK', dialCode: '+421', length: 9 },
  { name: 'Slovenia', flag: '🇸🇮', code: 'SI', dialCode: '+386', length: 9 },
  { name: 'Solomon Islands', flag: '🇸🇧', code: 'SB', dialCode: '+677', length: 7 },
  { name: 'Somalia', flag: '🇸🇴', code: 'SO', dialCode: '+252', length: 9 },
  { name: 'South Africa', flag: '🇿🇦', code: 'ZA', dialCode: '+27', length: 9 },
  { name: 'South Sudan', flag: '🇸🇸', code: 'SS', dialCode: '+211', length: 7 },
  { name: 'South Georgia and the South Sandwich Islands', flag: '🇬🇸', code: 'GS', dialCode: '+500', length: 5 },
  { name: 'Spain', flag: '🇪🇸', code: 'ES', dialCode: '+34', length: 9 },
  { name: 'Sri Lanka', flag: '🇱🇰', code: 'LK', dialCode: '+94', length: 7 },
  { name: 'Sudan', flag: '🇸🇩', code: 'SD', dialCode: '+249', length: 7 },
  { name: 'Suriname', flag: '🇸🇷', code: 'SR', dialCode: '+597', length: 7 },
  { name: 'Svalbard and Jan Mayen', flag: '🇸🇯', code: 'SJ', dialCode: '+47', length: 8 },
  { name: 'Eswatini', flag: '🇸🇿', code: 'SZ', dialCode: '+268', length: 8 },
  { name: 'Sweden', flag: '🇸🇪', code: 'SE', dialCode: '+46', length: 7 },
  { name: 'Switzerland', flag: '🇨🇭', code: 'CH', dialCode: '+41', length: 9 },
  { name: 'Syrian Arab Republic', flag: '🇸🇾', code: 'SY', dialCode: '+963', length: 7 },
  { name: 'Taiwan', flag: '🇹🇼', code: 'TW', dialCode: '+886', length: 9 },
  { name: 'Tajikistan', flag: '🇹🇯', code: 'TJ', dialCode: '+992', length: 9 },
  { name: 'Tanzania, United Republic of Tanzania', flag: '🇹🇿', code: 'TZ', dialCode: '+255', length: 7 },
  { name: 'Thailand', flag: '🇹🇭', code: 'TH', dialCode: '+66', length: 9 },
  { name: 'Timor-Leste', flag: '🇹🇱', code: 'TL', dialCode: '+670', length: 7 },
  { name: 'Togo', flag: '🇹🇬', code: 'TG', dialCode: '+228', length: 8 },
  { name: 'Tokelau', flag: '🇹🇰', code: 'TK', dialCode: '+690', length: 5 },
  { name: 'Tonga', flag: '🇹🇴', code: 'TO', dialCode: '+676', length: 5 },
  { name: 'Trinidad and Tobago', flag: '🇹🇹', code: 'TT', dialCode: '+1868', length: 7 },
  { name: 'Tunisia', flag: '🇹🇳', code: 'TN', dialCode: '+216', length: 8 },
  { name: 'Turkey', flag: '🇹🇷', code: 'TR', dialCode: '+90', length: 11 },
  { name: 'Turkmenistan', flag: '🇹🇲', code: 'TM', dialCode: '+993', length: 8 },
  { name: 'Turks and Caicos Islands', flag: '🇹🇨', code: 'TC', dialCode: '+1649', length: 10 },
  { name: 'Tuvalu', flag: '🇹🇻', code: 'TV', dialCode: '+688', length: 5 },
  { name: 'Uganda', flag: '🇺🇬', code: 'UG', dialCode: '+256', length: 7 },
  { name: 'Ukraine', flag: '🇺🇦', code: 'UA', dialCode: '+380', length: 9 },
  { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE', dialCode: '+971', length: 9 },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'GB', dialCode: '+44', length: 10 },
  { name: 'United States', flag: '🇺🇸', code: 'US', dialCode: '+1', length: 10 },
  { name: 'Uruguay', flag: '🇺🇾', code: 'UY', dialCode: '+598', length: 8 },
  { name: 'Uzbekistan', flag: '🇺🇿', code: 'UZ', dialCode: '+998', length: 9 },
  { name: 'Vanuatu', flag: '🇻🇺', code: 'VU', dialCode: '+678', length: 5 },
  { name: 'Venezuela, Bolivarian Republic of Venezuela', flag: '🇻🇪', code: 'VE', dialCode: '+58', length: 7 },
  { name: 'Vietnam', flag: '🇻🇳', code: 'VN', dialCode: '+84', length: 9 },
  { name: 'Virgin Islands, British', flag: '🇻🇬', code: 'VG', dialCode: '+1284', length: 7 },
  { name: 'Virgin Islands, U.S.', flag: '🇻🇮', code: 'VI', dialCode: '+1340', length: 10 },
  { name: 'Wallis and Futuna', flag: '🇼🇫', code: 'WF', dialCode: '+681', length: 6 },
  { name: 'Yemen', flag: '🇾🇪', code: 'YE', dialCode: '+967', length: 9 },
  { name: 'Zambia', flag: '🇿🇲', code: 'ZM', dialCode: '+260', length: 9 },
  { name: 'Zimbabwe', flag: '🇿🇼', code: 'ZW', dialCode: '+263', length: 9 },
];

type CountryWithoutCode = Omit<Country, 'code'>;

interface CountriesMap {
  [code: string]: CountryWithoutCode;
}

export const countriesMap: CountriesMap = {
  '##': { name: 'Select a country', flag: '🌎', dialCode: '+', length: 15 },
  AF: { name: 'Afghanistan', flag: '🇦🇫', dialCode: '+93', length: 9 },
  AX: { name: 'Åland Islands', flag: '🇦🇽', dialCode: '+358', length: 15 },
  AL: { name: 'Albania', flag: '🇦🇱', dialCode: '+355', length: 9 },
  DZ: { name: 'Algeria', flag: '🇩🇿', dialCode: '+213', length: 9 },
  AS: { name: 'American Samoa', flag: '🇦🇸', dialCode: '+1684', length: 10 },
  AD: { name: 'Andorra', flag: '🇦🇩', dialCode: '+376', length: 6 },
  AO: { name: 'Angola', flag: '🇦🇴', dialCode: '+244', length: 9 },
  AI: { name: 'Anguilla', flag: '🇦🇮', dialCode: '+1264', length: 10 },
  AQ: { name: 'Antarctica', flag: '🇦🇶', dialCode: '+672', length: 6 },
  AG: { name: 'Antigua and Barbuda', flag: '🇦🇬', dialCode: '+1268', length: 10 },
  AR: { name: 'Argentina', flag: '🇦🇷', dialCode: '+54', length: 8 },
  AM: { name: 'Armenia', flag: '🇦🇲', dialCode: '+374', length: 6 },
  AW: { name: 'Aruba', flag: '🇦🇼', dialCode: '+297', length: 7 },
  AU: { name: 'Australia', flag: '🇦🇺', dialCode: '+61', length: 9 },
  AT: { name: 'Austria', flag: '🇦🇹', dialCode: '+43', length: 11 },
  AZ: { name: 'Azerbaijan', flag: '🇦🇿', dialCode: '+994', length: 9 },
  BS: { name: 'Bahamas', flag: '🇧🇸', dialCode: '+1242', length: 10 },
  BH: { name: 'Bahrain', flag: '🇧🇭', dialCode: '+973', length: 8 },
  BD: { name: 'Bangladesh', flag: '🇧🇩', dialCode: '+880', length: 10 },
  BB: { name: 'Barbados', flag: '🇧🇧', dialCode: '+1246', length: 10 },
  BY: { name: 'Belarus', flag: '🇧🇾', dialCode: '+375', length: 9 },
  BE: { name: 'Belgium', flag: '🇧🇪', dialCode: '+32', length: 9 },
  BZ: { name: 'Belize', flag: '🇧🇿', dialCode: '+501', length: 7 },
  BJ: { name: 'Benin', flag: '🇧🇯', dialCode: '+229', length: 8 },
  BM: { name: 'Bermuda', flag: '🇧🇲', dialCode: '+1441', length: 10 },
  BT: { name: 'Bhutan', flag: '🇧🇹', dialCode: '+975', length: 7 },
  BO: { name: 'Bolivia, Plurinational State of bolivia', flag: '🇧🇴', dialCode: '+591', length: 9 },
  BA: { name: 'Bosnia and Herzegovina', flag: '🇧🇦', dialCode: '+387', length: 8 },
  BW: { name: 'Botswana', flag: '🇧🇼', dialCode: '+267', length: 7 },
  BV: { name: 'Bouvet Island', flag: '🇧🇻', dialCode: '+47', length: 15 },
  BR: { name: 'Brazil', flag: '🇧🇷', dialCode: '+55', length: 11 },
  IO: { name: 'British Indian Ocean Territory', flag: '🇮🇴', dialCode: '+246', length: 7 },
  BN: { name: 'Brunei Darussalam', flag: '🇧🇳', dialCode: '+673', length: 7 },
  BG: { name: 'Bulgaria', flag: '🇧🇬', dialCode: '+359', length: 9 },
  BF: { name: 'Burkina Faso', flag: '🇧🇫', dialCode: '+226', length: 8 },
  BI: { name: 'Burundi', flag: '🇧🇮', dialCode: '+257', length: 8 },
  KH: { name: 'Cambodia', flag: '🇰🇭', dialCode: '+855', length: 9 },
  CM: { name: 'Cameroon', flag: '🇨🇲', dialCode: '+237', length: 9 },
  CA: { name: 'Canada', flag: '🇨🇦', dialCode: '+1', length: 10 },
  CV: { name: 'Cape Verde', flag: '🇨🇻', dialCode: '+238', length: 7 },
  KY: { name: 'Cayman Islands', flag: '🇰🇾', dialCode: '+345', length: 7 },
  CF: { name: 'Central African Republic', flag: '🇨🇫', dialCode: '+236', length: 8 },
  TD: { name: 'Chad', flag: '🇹🇩', dialCode: '+235', length: 6 },
  CL: { name: 'Chile', flag: '🇨🇱', dialCode: '+56', length: 9 },
  CN: { name: 'China', flag: '🇨🇳', dialCode: '+86', length: 11 },
  CX: { name: 'Christmas Island', flag: '🇨🇽', dialCode: '+61', length: 9 },
  CC: { name: 'Cocos (Keeling) Islands', flag: '🇨🇨', dialCode: '+61', length: 10 },
  CO: { name: 'Colombia', flag: '🇨🇴', dialCode: '+57', length: 10 },
  KM: { name: 'Comoros', flag: '🇰🇲', dialCode: '+269', length: 7 },
  CG: { name: 'Congo', flag: '🇨🇬', dialCode: '+242', length: 9 },
  CD: { name: 'Congo, The Democratic Republic of the Congo', flag: '🇨🇩', dialCode: '+243', length: 7 },
  CK: { name: 'Cook Islands', flag: '🇨🇰', dialCode: '+682', length: 5 },
  CR: { name: 'Costa Rica', flag: '🇨🇷', dialCode: '+506', length: 8 },
  CI: { name: "Cote d'Ivoire", flag: '🇨🇮', dialCode: '+225', length: 8 },
  HR: { name: 'Croatia', flag: '🇭🇷', dialCode: '+385', length: 9 },
  CU: { name: 'Cuba', flag: '🇨🇺', dialCode: '+53', length: 8 },
  CY: { name: 'Cyprus', flag: '🇨🇾', dialCode: '+357', length: 8 },
  CZ: { name: 'Czech Republic', flag: '🇨🇿', dialCode: '+420', length: 9 },
  DK: { name: 'Denmark', flag: '🇩🇰', dialCode: '+45', length: 8 },
  DJ: { name: 'Djibouti', flag: '🇩🇯', dialCode: '+253', length: 10 },
  DM: { name: 'Dominica', flag: '🇩🇲', dialCode: '+1767', length: 10 },
  DO: { name: 'Dominican Republic', flag: '🇩🇴', dialCode: '+1849', length: 10 },
  EC: { name: 'Ecuador', flag: '🇪🇨', dialCode: '+593', length: 9 },
  EG: { name: 'Egypt', flag: '🇪🇬', dialCode: '+20', length: 10 },
  SV: { name: 'El Salvador', flag: '🇸🇻', dialCode: '+503', length: 8 },
  GQ: { name: 'Equatorial Guinea', flag: '🇬🇶', dialCode: '+240', length: 9 },
  ER: { name: 'Eritrea', flag: '🇪🇷', dialCode: '+291', length: 7 },
  EE: { name: 'Estonia', flag: '🇪🇪', dialCode: '+372', length: 8 },
  ET: { name: 'Ethiopia', flag: '🇪🇹', dialCode: '+251', length: 9 },
  FK: { name: 'Falkland Islands (Malvinas)', flag: '🇫🇰', dialCode: '+500', length: 5 },
  FO: { name: 'Faroe Islands', flag: '🇫🇴', dialCode: '+298', length: 5 },
  FJ: { name: 'Fiji', flag: '🇫🇯', dialCode: '+679', length: 7 },
  FI: { name: 'Finland', flag: '🇫🇮', dialCode: '+358', length: 15 },
  FR: { name: 'France', flag: '🇫🇷', dialCode: '+33', length: 9 },
  GF: { name: 'French Guiana', flag: '🇬🇫', dialCode: '+594', length: 9 },
  PF: { name: 'French Polynesia', flag: '🇵🇫', dialCode: '+689', length: 8 },
  TF: { name: 'French Southern Territories', flag: '🇹🇫', dialCode: '+262', length: 10 },
  GA: { name: 'Gabon', flag: '🇬🇦', dialCode: '+241', length: 7 },
  GM: { name: 'Gambia', flag: '🇬🇲', dialCode: '+220', length: 7 },
  GE: { name: 'Georgia', flag: '🇬🇪', dialCode: '+995', length: 9 },
  DE: { name: 'Germany', flag: '🇩🇪', dialCode: '+49', length: 10 },
  GH: { name: 'Ghana', flag: '🇬🇭', dialCode: '+233', length: 9 },
  GI: { name: 'Gibraltar', flag: '🇬🇮', dialCode: '+350', length: 8 },
  GR: { name: 'Greece', flag: '🇬🇷', dialCode: '+30', length: 10 },
  GL: { name: 'Greenland', flag: '🇬🇱', dialCode: '+299', length: 6 },
  GD: { name: 'Grenada', flag: '🇬🇩', dialCode: '+1473', length: 10 },
  GP: { name: 'Guadeloupe', flag: '🇬🇵', dialCode: '+590', length: 9 },
  GU: { name: 'Guam', flag: '🇬🇺', dialCode: '+1671', length: 10 },
  GT: { name: 'Guatemala', flag: '🇬🇹', dialCode: '+502', length: 8 },
  GG: { name: 'Guernsey', flag: '🇬🇬', dialCode: '+44', length: 10 },
  GN: { name: 'Guinea', flag: '🇬🇳', dialCode: '+224', length: 9 },
  GW: { name: 'Guinea-Bissau', flag: '🇬🇼', dialCode: '+245', length: 9 },
  GY: { name: 'Guyana', flag: '🇬🇾', dialCode: '+592', length: 7 },
  HT: { name: 'Haiti', flag: '🇭🇹', dialCode: '+509', length: 8 },
  HM: { name: 'Heard Island and Mcdonald Islands', flag: '🇭🇲', dialCode: '+672', length: 15 },
  VA: { name: 'Holy See (Vatican City State)', flag: '🇻🇦', dialCode: '+379', length: 10 },
  HN: { name: 'Honduras', flag: '🇭🇳', dialCode: '+504', length: 8 },
  HK: { name: 'Hong Kong', flag: '🇭🇰', dialCode: '+852', length: 8 },
  HU: { name: 'Hungary', flag: '🇭🇺', dialCode: '+36', length: 9 },
  IS: { name: 'Iceland', flag: '🇮🇸', dialCode: '+354', length: 7 },
  IN: { name: 'India', flag: '🇮🇳', dialCode: '+91', length: 10 },
  ID: { name: 'Indonesia', flag: '🇮🇩', dialCode: '+62', length: 11 },
  IR: { name: 'Iran, Islamic Republic of Persian Gulf', flag: '🇮🇷', dialCode: '+98', length: 11 },
  IQ: { name: 'Iraq', flag: '🇮🇶', dialCode: '+964', length: 10 },
  IE: { name: 'Ireland', flag: '🇮🇪', dialCode: '+353', length: 9 },
  IM: { name: 'Isle of Man', flag: '🇮🇲', dialCode: '+44', length: 10 },
  IL: { name: 'Israel', flag: '🇮🇱', dialCode: '+972', length: 9 },
  IT: { name: 'Italy', flag: '🇮🇹', dialCode: '+39', length: 10 },
  JM: { name: 'Jamaica', flag: '🇯🇲', dialCode: '+1876', length: 10 },
  JP: { name: 'Japan', flag: '🇯🇵', dialCode: '+81', length: 15 },
  JE: { name: 'Jersey', flag: '🇯🇪', dialCode: '+44', length: 10 },
  JO: { name: 'Jordan', flag: '🇯🇴', dialCode: '+962', length: 9 },
  KZ: { name: 'Kazakhstan', flag: '🇰🇿', dialCode: '+7', length: 10 },
  KE: { name: 'Kenya', flag: '🇰🇪', dialCode: '+254', length: 10 },
  KI: { name: 'Kiribati', flag: '🇰🇮', dialCode: '+686', length: 8 },
  KP: { name: "Korea, Democratic People's Republic of Korea", flag: '🇰🇵', dialCode: '+850', length: 13 },
  KR: { name: 'Korea, Republic of South Korea', flag: '🇰🇷', dialCode: '+82', length: 8 },
  XK: { name: 'Kosovo', flag: '🇽🇰', dialCode: '+383', length: 15 },
  KW: { name: 'Kuwait', flag: '🇰🇼', dialCode: '+965', length: 8 },
  KG: { name: 'Kyrgyzstan', flag: '🇰🇬', dialCode: '+996', length: 9 },
  LA: { name: 'Laos', flag: '🇱🇦', dialCode: '+856', length: 9 },
  LV: { name: 'Latvia', flag: '🇱🇻', dialCode: '+371', length: 8 },
  LB: { name: 'Lebanon', flag: '🇱🇧', dialCode: '+961', length: 8 },
  LS: { name: 'Lesotho', flag: '🇱🇸', dialCode: '+266', length: 8 },
  LR: { name: 'Liberia', flag: '🇱🇷', dialCode: '+231', length: 9 },
  LY: { name: 'Libyan Arab Jamahiriya', flag: '🇱🇾', dialCode: '+218', length: 10 },
  LI: { name: 'Liechtenstein', flag: '🇱🇮', dialCode: '+423', length: 7 },
  LT: { name: 'Lithuania', flag: '🇱🇹', dialCode: '+370', length: 8 },
  LU: { name: 'Luxembourg', flag: '🇱🇺', dialCode: '+352', length: 9 },
  MO: { name: 'Macao', flag: '🇲🇴', dialCode: '+853', length: 8 },
  MK: { name: 'Macedonia', flag: '🇲🇰', dialCode: '+389', length: 8 },
  MG: { name: 'Madagascar', flag: '🇲🇬', dialCode: '+261', length: 7 },
  MW: { name: 'Malawi', flag: '🇲🇼', dialCode: '+265', length: 9 },
  MY: { name: 'Malaysia', flag: '🇲🇾', dialCode: '+60', length: 7 },
  MV: { name: 'Maldives', flag: '🇲🇻', dialCode: '+960', length: 7 },
  ML: { name: 'Mali', flag: '🇲🇱', dialCode: '+223', length: 8 },
  MT: { name: 'Malta', flag: '🇲🇹', dialCode: '+356', length: 8 },
  MH: { name: 'Marshall Islands', flag: '🇲🇭', dialCode: '+692', length: 7 },
  MQ: { name: 'Martinique', flag: '🇲🇶', dialCode: '+596', length: 9 },
  MR: { name: 'Mauritania', flag: '🇲🇷', dialCode: '+222', length: 8 },
  MU: { name: 'Mauritius', flag: '🇲🇺', dialCode: '+230', length: 8 },
  YT: { name: 'Mayotte', flag: '🇾🇹', dialCode: '+262', length: 9 },
  MX: { name: 'Mexico', flag: '🇲🇽', dialCode: '+52', length: 10 },
  FM: { name: 'Micronesia, Federated States of Micronesia', flag: '🇫🇲', dialCode: '+691', length: 7 },
  MD: { name: 'Moldova', flag: '🇲🇩', dialCode: '+373', length: 8 },
  MC: { name: 'Monaco', flag: '🇲🇨', dialCode: '+377', length: 8 },
  MN: { name: 'Mongolia', flag: '🇲🇳', dialCode: '+976', length: 8 },
  ME: { name: 'Montenegro', flag: '🇲🇪', dialCode: '+382', length: 8 },
  MS: { name: 'Montserrat', flag: '🇲🇸', dialCode: '+1664', length: 10 },
  MA: { name: 'Morocco', flag: '🇲🇦', dialCode: '+212', length: 9 },
  MZ: { name: 'Mozambique', flag: '🇲🇿', dialCode: '+258', length: 12 },
  MM: { name: 'Myanmar', flag: '🇲🇲', dialCode: '+95', length: 15 },
  NA: { name: 'Namibia', flag: '🇳🇦', dialCode: '+264', length: 7 },
  NR: { name: 'Nauru', flag: '🇳🇷', dialCode: '+674', length: 7 },
  NP: { name: 'Nepal', flag: '🇳🇵', dialCode: '+977', length: 10 },
  NL: { name: 'Netherlands', flag: '🇳🇱', dialCode: '+31', length: 9 },
  AN: { name: 'Netherlands Antilles', flag: '', dialCode: '+599', length: 15 },
  NC: { name: 'New Caledonia', flag: '🇳🇨', dialCode: '+687', length: 6 },
  NZ: { name: 'New Zealand', flag: '🇳🇿', dialCode: '+64', length: 9 },
  NI: { name: 'Nicaragua', flag: '🇳🇮', dialCode: '+505', length: 8 },
  NE: { name: 'Niger', flag: '🇳🇪', dialCode: '+227', length: 8 },
  NG: { name: 'Nigeria', flag: '🇳🇬', dialCode: '+234', length: 8 },
  NU: { name: 'Niue', flag: '🇳🇺', dialCode: '+683', length: 4 },
  NF: { name: 'Norfolk Island', flag: '🇳🇫', dialCode: '+672', length: 6 },
  MP: { name: 'Northern Mariana Islands', flag: '🇲🇵', dialCode: '+1670', length: 7 },
  NO: { name: 'Norway', flag: '🇳🇴', dialCode: '+47', length: 8 },
  OM: { name: 'Oman', flag: '🇴🇲', dialCode: '+968', length: 8 },
  PK: { name: 'Pakistan', flag: '🇵🇰', dialCode: '+92', length: 10 },
  PW: { name: 'Palau', flag: '🇵🇼', dialCode: '+680', length: 7 },
  PS: { name: 'Palestinian Territory, Occupied', flag: '🇵🇸', dialCode: '+970', length: 9 },
  PA: { name: 'Panama', flag: '🇵🇦', dialCode: '+507', length: 8 },
  PG: { name: 'Papua New Guinea', flag: '🇵🇬', dialCode: '+675', length: 8 },
  PY: { name: 'Paraguay', flag: '🇵🇾', dialCode: '+595', length: 9 },
  PE: { name: 'Peru', flag: '🇵🇪', dialCode: '+51', length: 9 },
  PH: { name: 'Philippines', flag: '🇵🇭', dialCode: '+63', length: 10 },
  PN: { name: 'Pitcairn', flag: '🇵🇳', dialCode: '+64', length: 9 },
  PL: { name: 'Poland', flag: '🇵🇱', dialCode: '+48', length: 9 },
  PT: { name: 'Portugal', flag: '🇵🇹', dialCode: '+351', length: 9 },
  PR: { name: 'Puerto Rico', flag: '🇵🇷', dialCode: '+1939', length: 10 },
  QA: { name: 'Qatar', flag: '🇶🇦', dialCode: '+974', length: 8 },
  RO: { name: 'Romania', flag: '🇷🇴', dialCode: '+40', length: 10 },
  RU: { name: 'Russia', flag: '🇷🇺', dialCode: '+7', length: 10 },
  RW: { name: 'Rwanda', flag: '🇷🇼', dialCode: '+250', length: 9 },
  RE: { name: 'Reunion', flag: '🇷🇪', dialCode: '+262', length: 10 },
  BL: { name: 'Saint Barthelemy', flag: '🇧🇱', dialCode: '+590', length: 9 },
  SH: { name: 'Saint Helena, Ascension and Tristan Da Cunha', flag: '🇸🇭', dialCode: '+290', length: 4 },
  KN: { name: 'Saint Kitts and Nevis', flag: '🇰🇳', dialCode: '+1869', length: 10 },
  LC: { name: 'Saint Lucia', flag: '🇱🇨', dialCode: '+1758', length: 7 },
  MF: { name: 'Saint Martin', flag: '🇲🇫', dialCode: '+590', length: 6 },
  PM: { name: 'Saint Pierre and Miquelon', flag: '🇵🇲', dialCode: '+508', length: 6 },
  VC: { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', dialCode: '+1784', length: 7 },
  WS: { name: 'Samoa', flag: '🇼🇸', dialCode: '+685', length: 7 },
  SM: { name: 'San Marino', flag: '🇸🇲', dialCode: '+378', length: 10 },
  ST: { name: 'Sao Tome and Principe', flag: '🇸🇹', dialCode: '+239', length: 7 },
  SA: { name: 'Saudi Arabia', flag: '🇸🇦', dialCode: '+966', length: 9 },
  SN: { name: 'Senegal', flag: '🇸🇳', dialCode: '+221', length: 9 },
  RS: { name: 'Serbia', flag: '🇷🇸', dialCode: '+381', length: 9 },
  SC: { name: 'Seychelles', flag: '🇸🇨', dialCode: '+248', length: 7 },
  SL: { name: 'Sierra Leone', flag: '🇸🇱', dialCode: '+232', length: 8 },
  SG: { name: 'Singapore', flag: '🇸🇬', dialCode: '+65', length: 8 },
  SK: { name: 'Slovakia', flag: '🇸🇰', dialCode: '+421', length: 9 },
  SI: { name: 'Slovenia', flag: '🇸🇮', dialCode: '+386', length: 9 },
  SB: { name: 'Solomon Islands', flag: '🇸🇧', dialCode: '+677', length: 7 },
  SO: { name: 'Somalia', flag: '🇸🇴', dialCode: '+252', length: 9 },
  ZA: { name: 'South Africa', flag: '🇿🇦', dialCode: '+27', length: 9 },
  SS: { name: 'South Sudan', flag: '🇸🇸', dialCode: '+211', length: 7 },
  GS: { name: 'South Georgia and the South Sandwich Islands', flag: '🇬🇸', dialCode: '+500', length: 5 },
  ES: { name: 'Spain', flag: '🇪🇸', dialCode: '+34', length: 9 },
  LK: { name: 'Sri Lanka', flag: '🇱🇰', dialCode: '+94', length: 7 },
  SD: { name: 'Sudan', flag: '🇸🇩', dialCode: '+249', length: 7 },
  SR: { name: 'Suriname', flag: '🇸🇷', dialCode: '+597', length: 7 },
  SJ: { name: 'Svalbard and Jan Mayen', flag: '🇸🇯', dialCode: '+47', length: 8 },
  SZ: { name: 'Eswatini', flag: '🇸🇿', dialCode: '+268', length: 8 },
  SE: { name: 'Sweden', flag: '🇸🇪', dialCode: '+46', length: 7 },
  CH: { name: 'Switzerland', flag: '🇨🇭', dialCode: '+41', length: 9 },
  SY: { name: 'Syrian Arab Republic', flag: '🇸🇾', dialCode: '+963', length: 7 },
  TW: { name: 'Taiwan', flag: '🇹🇼', dialCode: '+886', length: 9 },
  TJ: { name: 'Tajikistan', flag: '🇹🇯', dialCode: '+992', length: 9 },
  TZ: { name: 'Tanzania, United Republic of Tanzania', flag: '🇹🇿', dialCode: '+255', length: 7 },
  TH: { name: 'Thailand', flag: '🇹🇭', dialCode: '+66', length: 9 },
  TL: { name: 'Timor-Leste', flag: '🇹🇱', dialCode: '+670', length: 7 },
  TG: { name: 'Togo', flag: '🇹🇬', dialCode: '+228', length: 8 },
  TK: { name: 'Tokelau', flag: '🇹🇰', dialCode: '+690', length: 5 },
  TO: { name: 'Tonga', flag: '🇹🇴', dialCode: '+676', length: 5 },
  TT: { name: 'Trinidad and Tobago', flag: '🇹🇹', dialCode: '+1868', length: 7 },
  TN: { name: 'Tunisia', flag: '🇹🇳', dialCode: '+216', length: 8 },
  TR: { name: 'Turkey', flag: '🇹🇷', dialCode: '+90', length: 11 },
  TM: { name: 'Turkmenistan', flag: '🇹🇲', dialCode: '+993', length: 8 },
  TC: { name: 'Turks and Caicos Islands', flag: '🇹🇨', dialCode: '+1649', length: 10 },
  TV: { name: 'Tuvalu', flag: '🇹🇻', dialCode: '+688', length: 5 },
  UG: { name: 'Uganda', flag: '🇺🇬', dialCode: '+256', length: 7 },
  UA: { name: 'Ukraine', flag: '🇺🇦', dialCode: '+380', length: 9 },
  AE: { name: 'United Arab Emirates', flag: '🇦🇪', dialCode: '+971', length: 9 },
  GB: { name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44', length: 10 },
  US: { name: 'United States', flag: '🇺🇸', dialCode: '+1', length: 10 },
  UY: { name: 'Uruguay', flag: '🇺🇾', dialCode: '+598', length: 8 },
  UZ: { name: 'Uzbekistan', flag: '🇺🇿', dialCode: '+998', length: 9 },
  VU: { name: 'Vanuatu', flag: '🇻🇺', dialCode: '+678', length: 5 },
  VE: { name: 'Venezuela, Bolivarian Republic of Venezuela', flag: '🇻🇪', dialCode: '+58', length: 7 },
  VN: { name: 'Vietnam', flag: '🇻🇳', dialCode: '+84', length: 9 },
  VG: { name: 'Virgin Islands, British', flag: '🇻🇬', dialCode: '+1284', length: 7 },
  VI: { name: 'Virgin Islands, U.S.', flag: '🇻🇮', dialCode: '+1340', length: 10 },
  WF: { name: 'Wallis and Futuna', flag: '🇼🇫', dialCode: '+681', length: 6 },
  YE: { name: 'Yemen', flag: '🇾🇪', dialCode: '+967', length: 9 },
  ZM: { name: 'Zambia', flag: '🇿🇲', dialCode: '+260', length: 9 },
  ZW: { name: 'Zimbabwe', flag: '🇿🇼', dialCode: '+263', length: 9 }
};

export const coentryLongestDialCodeLength = countries.reduce(
  (longest, country) => Math.max(longest, country.dialCode.length),
  0
);
