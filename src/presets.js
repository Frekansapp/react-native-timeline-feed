/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { type RenderProps } from './types';

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH
} from './defaults';

import {
  Row,
  Time,
  Event,
  Title,
  Description,
  VerticalSeparator,
  Line,
  Circle,
  Dot
} from './components';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const getItemProps = ({ item, props }: RenderProps) => {
  const lineColor = item.lineColor || props.lineColor || DEFAULT_LINE_COLOR;
  const lineWidth = item.lineWidth || props.lineWidth || DEFAULT_LINE_WIDTH;

  const circleColor = item.circleColor || props.circleColor || DEFAULT_CIRCLE_COLOR;

  const dotColor = item.dotColor || props.dotColor || DEFAULT_DOT_COLOR;

  return {
    lineColor,
    lineWidth,
    circleColor,
    dotColor
  };
};

export const SingleColumnLeft = ({ item, index, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({ item, index, props });

  return (
    <Row>
      <VerticalSeparator>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5 }} >

          <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#ddd', padding: 3, borderRadius: 3, marginRight: 5 }} >
            <Time>{item.time}</Time>

          </View>

          <View style={{ width: 30, alignItems: 'center', justifyContent: 'center', height: 30, borderRadius: 50, borderWidth: 3, borderColor: "gray" }} >
            <FontAwesome color="gray" size={18} name={item.icon} />
          </View>
        </View>
        <Line style={{ marginLeft: 70, borderRadius: 3 }} color={lineColor} width={3} />



      </VerticalSeparator>
      <Event style={{ marginLeft: 10,marginBottom:10,marginRight:5,backgroundColor:'white',padding:8,borderRadius:6,elevation:1 }} >
       
        <Title textStyle={{marginTop:0}} >{item.title}</Title>
        <Description >{item.description}</Description>
      </Event>
    </Row>
  );
};

export const SingleColumnRight = ({ item, index, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({ item, index, props });

  return (
    <Row>
      <Event style={styles.rightAlign}>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Event>
      <VerticalSeparator>
        <Line color={lineColor} width={lineWidth} />
        <Circle color={circleColor}>
          <Dot color={dotColor} />
        </Circle>
      </VerticalSeparator>
      <Time>{item.time}</Time>
    </Row>
  );
};

/*
if (index % 2 === 0) {
  return (
    <Timeline.Row key={index}>
      <Timeline.Time {...renderProps} style={styles.time} />
      <Timeline.VerticalSeparator {...renderProps}>
        <Timeline.Line {...renderProps} />
        <Timeline.Circle {...renderProps}>
          <Timeline.Dot {...renderProps} />
        </Timeline.Circle>
      </Timeline.VerticalSeparator>
      <Timeline.Event {...renderProps} style={styles.event}>
        <Timeline.Title {...renderProps} />
        <Timeline.Description {...renderProps} />
      </Timeline.Event>
    </Timeline.Row>
  );
} else {
  return (
    <Timeline.Row key={index}>
      <Timeline.Event {...renderProps} style={styles.event}>
        <Timeline.Title {...renderProps} />
        <Timeline.Description {...renderProps} />
      </Timeline.Event>
      <Timeline.VerticalSeparator {...renderProps} >
        <Timeline.Line {...renderProps} />
        <Timeline.Circle {...renderProps}>
          <Timeline.Dot {...renderProps} />
        </Timeline.Circle>
      </Timeline.VerticalSeparator>
      <Timeline.Time {...renderProps} style={styles.time} />
    </Timeline.Row>
  );
}
*/

const styles = StyleSheet.create({
  rightAlign: {
    alignItems: 'flex-end'
  },
  leftAlign: {
    alignItems: 'flex-start'
  }
});
