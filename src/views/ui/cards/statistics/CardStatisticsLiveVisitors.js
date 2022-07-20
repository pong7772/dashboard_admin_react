// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  {
    data: [70, 118, 92, 49, 19, 49, 23, 82, 65, 23, 49, 65, 65]
  }
]

const CardStatisticsLiveVisitors = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      padding: {
        top: -4,
        left: -20,
        right: -2,
        bottom: -7
      },
      yaxis: {
        lines: { show: false }
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.success.main, 1)],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '43%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Live Visitors'
        subheader='Total 890 Visitors Are Live'
        titleTypographyProps={{ variant: 'h6' }}
        subheaderTypographyProps={{ variant: 'caption' }}
        sx={{ '& .MuiCardHeader-subheader': { fontSize: '0.75rem' } }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ color: 'success.main' }}>
              +78.2%
            </Typography>
            <ChevronUp sx={{ color: 'success.main' }} />
          </Box>
        }
      />
      <CardContent>
        <ReactApexcharts type='bar' height={250} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default CardStatisticsLiveVisitors
