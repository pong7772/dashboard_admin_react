// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import TableRow from '@mui/material/TableRow'
import Collapse from '@mui/material/Collapse'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'
import { styled, alpha, useTheme } from '@mui/material/styles'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TableCell from '@mui/material/TableCell'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Plus from 'mdi-material-ui/Plus'
import Close from 'mdi-material-ui/Close'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Custom Component Imports
import Repeater from 'src/@core/components/repeater'

// ** Styles
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef(({ ...props }, ref) => {
  return (
    <TextField
      size='small'
      inputRef={ref}
      sx={{ width: { sm: '250px', xs: '170px' }, '& .MuiInputBase-input': { color: 'text.secondary' } }}
      {...props}
    />
  )
})

const MUITableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 0,
  padding: `${theme.spacing(1, 0)} !important`
}))

const CalcWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const RepeatingContent = styled(Grid)(({ theme }) => ({
  paddingRight: 0,
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& .col-title': {
    top: '-1.5rem',
    position: 'absolute'
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.down('lg')]: {
    '& .col-title': {
      top: '0',
      position: 'relative'
    }
  }
}))

const RepeaterWrapper = styled(CardContent)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(5.5),
  '& .repeater-wrapper + .repeater-wrapper': {
    marginTop: theme.spacing(12)
  }
}))

const InvoiceAction = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  borderLeft: `1px solid ${theme.palette.divider}`
}))

const CustomSelectItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: 'transparent !important',
  '&:hover': { backgroundColor: `${alpha(theme.palette.success.main, 0.1)} !important` }
}))
const now = new Date()
const tomorrowDate = now.setDate(now.getDate() + 7)

const EditCard = props => {
  // ** Props
  const { clients, invoiceNumber, selectedClient, setSelectedClient, toggleAddCustomerDrawer } = props

  // ** States
  const [count, setCount] = useState(1)
  const [selected, setSelected] = useState('')
  const [issueDate, setIssueDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(new Date(tomorrowDate))

  // ** Hook
  const theme = useTheme()

  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Handle Invoice To Change
  const handleInvoiceChange = event => {
    setSelected(event.target.value)
    if (clients !== undefined) {
      setSelectedClient(clients.filter(i => i.name === event.target.value)[0])
    }
  }

  const handleAddNewCustomer = () => {
    toggleAddCustomerDrawer()
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xl={6} xs={12} sx={{ mb: { xl: 0, xs: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                <svg width={40} fill='none' height={22} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fill={theme.palette.primary.main}
                    transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
                  />
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fillOpacity='0.4'
                    fill='url(#paint0_linear_7821_79167)'
                    transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
                  />
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fill={theme.palette.primary.main}
                    transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
                  />
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fill={theme.palette.primary.main}
                    transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                  />
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fillOpacity='0.4'
                    fill='url(#paint1_linear_7821_79167)'
                    transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
                  />
                  <rect
                    rx='25.1443'
                    width='50.2886'
                    height='143.953'
                    fill={theme.palette.primary.main}
                    transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
                  />
                  <defs>
                    <linearGradient
                      y1='0'
                      x1='25.1443'
                      x2='25.1443'
                      y2='143.953'
                      id='paint0_linear_7821_79167'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop />
                      <stop offset='1' stopOpacity='0' />
                    </linearGradient>
                    <linearGradient
                      y1='0'
                      x1='25.1443'
                      x2='25.1443'
                      y2='143.953'
                      id='paint1_linear_7821_79167'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop />
                      <stop offset='1' stopOpacity='0' />
                    </linearGradient>
                  </defs>
                </svg>
                <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <Box>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  Office 149, 450 South Brand Brooklyn
                </Typography>
                <Typography variant='body2' sx={{ mb: 1 }}>
                  San Diego County, CA 91905, USA
                </Typography>
                <Typography variant='body2'>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={6} xs={12}>
            <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xl: 'flex-end', xs: 'flex-start' } }}>
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h6' sx={{ mr: 1, width: '105px' }}>
                    Invoice
                  </Typography>
                  <TextField
                    size='small'
                    value={invoiceNumber}
                    sx={{ width: { sm: '250px', xs: '170px' } }}
                    InputProps={{
                      disabled: true,
                      startAdornment: <InputAdornment position='start'>#</InputAdornment>
                    }}
                  />
                </Box>
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                  <Typography variant='body2' sx={{ mr: 2, width: '100px' }}>
                    Date Issued:
                  </Typography>
                  <DatePicker
                    id='issue-date'
                    selected={issueDate}
                    customInput={<CustomInput />}
                    onChange={date => setIssueDate(date)}
                  />
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant='body2' sx={{ mr: 2, width: '100px' }}>
                    Date Due:
                  </Typography>
                  <DatePicker
                    id='due-date'
                    selected={dueDate}
                    customInput={<CustomInput />}
                    onChange={date => setDueDate(date)}
                  />
                </Box>
              </Box>
            </DatePickerWrapper>
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ mt: 1, mb: 1 }} />

      <CardContent sx={{ pb: 2 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 4 } }}>
            <Typography variant='subtitle2' sx={{ mb: 3, color: 'text.primary' }}>
              Invoice To:
            </Typography>
            <Select size='small' value={selected} onChange={handleInvoiceChange} sx={{ mb: 4, width: '200px' }}>
              <CustomSelectItem value=''>
                <Button
                  fullWidth
                  size='small'
                  color='success'
                  onClick={handleAddNewCustomer}
                  startIcon={<Plus fontSize='small' />}
                  sx={{ '&:hover': { backgroundColor: 'transparent' } }}
                >
                  Add New Customer
                </Button>
              </CustomSelectItem>
              {clients !== undefined &&
                clients.map(client => (
                  <MenuItem key={client.name} value={client.name}>
                    {client.name}
                  </MenuItem>
                ))}
            </Select>
            {selectedClient !== null && selectedClient !== undefined ? (
              <Box>
                <Typography variant='body2' sx={{ mb: 1, color: 'text.primary' }}>
                  {selectedClient.company}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1, color: 'text.primary' }}>
                  {selectedClient.address}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1, color: 'text.primary' }}>
                  {selectedClient.contact}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1, color: 'text.primary' }}>
                  {selectedClient.companyEmail}
                </Typography>
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: ['flex-start', 'flex-end'] }}>
            <div>
              <Typography variant='subtitle2' sx={{ mb: 2.5, color: 'text.primary' }}>
                Bill To:
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Total Due:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>$12,110.55</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Bank name:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>American Bank</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>Country:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>United States</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>IBAN:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>ETD95476213874685</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='body2'>SWIFT code:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='body2'>BR91905</Typography>
                      </MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ mb: 1.25 }} />

      <RepeaterWrapper>
        <Repeater count={count}>
          {i => {
            const Tag = i === 0 ? Box : Collapse

            return (
              <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                <Grid container>
                  <RepeatingContent item xs={12}>
                    <Grid container sx={{ py: 4, width: '100%', pr: { lg: 0, xs: 4 } }}>
                      <Grid item lg={6} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='subtitle2'
                          className='col-title'
                          sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                        >
                          Item
                        </Typography>
                        <Select fullWidth size='small' defaultValue='App Design'>
                          <MenuItem value='App Design'>App Design</MenuItem>
                          <MenuItem value='App Customization'>App Customization</MenuItem>
                          <MenuItem value='ABC Template'>ABC Template</MenuItem>
                          <MenuItem value='App Development'>App Development</MenuItem>
                        </Select>
                        <TextField
                          rows={2}
                          fullWidth
                          multiline
                          size='small'
                          sx={{ mt: 3.5 }}
                          defaultValue='Customization & Bug Fixes'
                        />
                      </Grid>
                      <Grid item lg={2} md={3} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='subtitle2'
                          className='col-title'
                          sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                        >
                          Cost
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='24'
                          defaultValue='24'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                        <Box sx={{ mt: 3.5 }}>
                          <Typography component='span' variant='body2' sx={{ lineHeight: 2 }}>
                            Discount:
                          </Typography>{' '}
                          <Typography component='span' variant='body2'>
                            0%
                          </Typography>
                          <Tooltip title='Tax 1' placement='top'>
                            <Typography component='span' variant='body2' sx={{ mx: 2 }}>
                              0%
                            </Typography>
                          </Tooltip>
                          <Tooltip title='Tax 2' placement='top'>
                            <Typography component='span' variant='body2'>
                              0%
                            </Typography>
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item lg={2} md={2} xs={12} sx={{ px: 4, my: { lg: 0, xs: 4 } }}>
                        <Typography
                          variant='subtitle2'
                          className='col-title'
                          sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                        >
                          Hours
                        </Typography>
                        <TextField
                          size='small'
                          type='number'
                          placeholder='1'
                          defaultValue='1'
                          InputProps={{ inputProps: { min: 0 } }}
                        />
                      </Grid>
                      <Grid item lg={2} md={1} xs={12} sx={{ px: 4, my: { lg: 0 }, mt: 2 }}>
                        <Typography
                          variant='subtitle2'
                          className='col-title'
                          sx={{ mb: { md: 2, xs: 0 }, color: 'text.primary' }}
                        >
                          Price
                        </Typography>
                        <Typography variant='body2'>$24.00</Typography>
                      </Grid>
                    </Grid>
                    <InvoiceAction>
                      <IconButton size='small' onClick={deleteForm}>
                        <Close fontSize='small' />
                      </IconButton>
                    </InvoiceAction>
                  </RepeatingContent>
                </Grid>
              </Tag>
            )
          }}
        </Repeater>

        <Grid container sx={{ mt: 4.75 }}>
          <Grid item xs={12} sx={{ px: 0 }}>
            <Button
              size='small'
              variant='contained'
              startIcon={<Plus fontSize='small' />}
              onClick={() => setCount(count + 1)}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </RepeaterWrapper>

      <Divider />

      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={9} sx={{ order: { sm: 1, xs: 2 } }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Typography
                variant='body2'
                sx={{ mr: 2, color: 'text.primary', fontWeight: 600, letterSpacing: '.25px' }}
              >
                Salesperson:
              </Typography>
              <TextField
                size='small'
                defaultValue='Tommy Shelby'
                sx={{ maxWidth: '150px', '& .MuiInputBase-input': { color: 'text.secondary' } }}
              />
            </Box>
            <TextField
              size='small'
              placeholder='Thanks for your business'
              sx={{ maxWidth: '300px', '& .MuiInputBase-input': { color: 'text.secondary' } }}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
            <CalcWrapper>
              <Typography variant='body2'>Subtotal:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                $1800
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Discount:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                $28
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography variant='body2'>Tax:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                21%
              </Typography>
            </CalcWrapper>
            <Divider sx={{ mt: 6, mb: 1.5 }} />
            <CalcWrapper>
              <Typography variant='body2'>Total:</Typography>
              <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary', lineHeight: '.25px' }}>
                $1690
              </Typography>
            </CalcWrapper>
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ my: 1 }} />

      <CardContent sx={{ pt: 4 }}>
        <InputLabel htmlFor='invoice-note'>Note:</InputLabel>
        <TextField
          rows={2}
          fullWidth
          multiline
          id='invoice-note'
          sx={{ '& .MuiInputBase-input': { color: 'text.secondary' } }}
          defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
        />
      </CardContent>
    </Card>
  )
}

export default EditCard
