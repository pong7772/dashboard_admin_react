// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const data = [
  {
    progress: 75,
    title: 'Amazon',
    color: 'primary',
    amount: '$24,453'
  },
  {
    progress: 59,
    color: 'success',
    title: 'Flipkart',
    amount: '$12,763'
  },
  {
    progress: 20,
    title: 'eBay',
    color: 'error',
    amount: '$4,978'
  }
]

const CardTotalEarnings = () => {
  return (
    <Card>
      <CardHeader
        title='Total Earning'
        titleTypographyProps={{ sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.5)} !important` }}>
        <Box sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ mr: 0.5 }}>
            $42,880
          </Typography>
          <MenuUp sx={{ mr: 0.5, fontSize: '1.875rem', color: 'success.main' }} />
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
            22%
          </Typography>
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 7.5 }}>
          Compared to $84,325 last year
        </Typography>

        {data.map((item, index) => {
          return (
            <Box key={item.title} sx={{ mb: index !== data.length - 1 ? 6.5 : undefined }}>
              <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ mr: 2, fontWeight: 600 }}>{item.title}</Typography>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {item.amount}
                </Typography>
              </Box>
              <LinearProgress color={item.color} value={item.progress} variant='determinate' />
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardTotalEarnings
