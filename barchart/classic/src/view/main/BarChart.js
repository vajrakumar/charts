Ext.define('chart.view.main.BarChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'bar-chart',
    width: '100%',
    height: 460,

    store: {
        data: [{
            TIMESTAMP: "2018-07-25 12:45:00",
            USER_CPU: 2.109,
            SYS_CPU: 3.227,
            WAIT_IO_CPU: 42.6056,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 13:00:00",
            USER_CPU: 1.9774,
            SYS_CPU: 3.1319,
            WAIT_IO_CPU: 43.3876,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 13:15:00",
            USER_CPU: 2.3299,
            SYS_CPU: 3.4136,
            WAIT_IO_CPU: 45.0819,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 13:30:00",
            USER_CPU: 2.8186,
            SYS_CPU: 4.1767,
            WAIT_IO_CPU: 49.8967,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 13:45:00",
            USER_CPU: 3.362,
            SYS_CPU: 5.0499,
            WAIT_IO_CPU: 66.4818,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 14:00:00",
            USER_CPU: 3.0759,
            SYS_CPU: 4.5521,
            WAIT_IO_CPU: 46.6655,
            OTHER_CPU: 0
        }, {
            TIMESTAMP: "2018-07-25 14:15:00",
            USER_CPU: 3.6871,
            SYS_CPU: 6.1133,
            WAIT_IO_CPU: 67.0164,
            OTHER_CPU: 0
        }]
    },
    legend: {
        type: 'sprite',
        docked: 'bottom'
    },
    axes: [{
        type: 'numeric',
        position: 'left',
        fields: ['USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU', 'OTHER_CPU'],
        minimum: 0
    }, {
        type: 'category',
        position: 'bottom',
        fields: ['TIMESTAMP'],
        label: {
            rotate: {
                degrees: -45
            },
        },
        renderer: function (axis, label, layoutContext) {

            return Ext.Date.format(new Date(label), 'F-d h:i A')
        }
    }],
    series: [{
        type: 'bar',
        title: ['user-cpu', 'sys-cpu', 'wait-to-cpu', 'other-cpu'],
        xField: 'TIMESTAMP',
        yField: ['USER_CPU', 'SYS_CPU', 'WAIT_IO_CPU', 'OTHER_CPU'],
        // stacked: true
        highlight: true,
        bind: {
            stacked: '{stackedCheckBox.checked}'
        },
        tooltip: {
            trackMouse: true,
            renderer: function (tooltip, record, item) {
                var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
                    cpu = item.series.getTitle()[fieldIndex];

                tooltip.setHtml(cpu + ' on ' + record.get('TIMESTAMP') + ' is : ' +
                    record.get(item.field));
            },
        }
    }]
});
