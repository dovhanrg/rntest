import {
  Circle,
  Defs,
  Ellipse,
  LinearGradient,
  Path,
  Stop,
  Svg,
  type SvgProps,
} from 'react-native-svg';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 29,
  },
});

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

export function MainBackgroundSvg(props: ISvgProps) {
  return (
    <View style={styles.wrapper}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={225}
        height={210}
        fill="none"
        {...props}>
        <Ellipse
          cx={110.909}
          cy={114.521}
          fill="#F1F3FF"
          rx={93.355}
          ry={95.479}
        />
        <Ellipse cx={23.405} cy={50.052} fill="#F1F3FF" rx={5.851} ry={5.984} />
        <Ellipse
          cx={177.401}
          cy={11.153}
          fill="#F1F3FF"
          rx={10.905}
          ry={11.153}
        />
        <Ellipse
          cx={25.267}
          cy={175.997}
          fill="#F1F3FF"
          rx={10.373}
          ry={10.609}
        />
        <Ellipse
          cx={210.913}
          cy={165.661}
          fill="#F1F3FF"
          rx={10.373}
          ry={10.609}
        />
        <Ellipse cx={190.7} cy={177.63} fill="#F1F3FF" rx={5.053} ry={5.168} />
        <Path
          fill="#fff"
          d="m215.785 132.926 1.629 7.871 7.586 1.69-7.586 1.69-1.629 7.871-1.629-7.871-7.586-1.69 7.586-1.69 1.629-7.871Z"
        />
        <Path
          fill="#C4CBF5"
          d="M205.585 54.783c.22-1.063 1.738-1.063 1.958 0l.519 2.507a1 1 0 0 0 .762.773l2.574.574c1.043.232 1.043 1.72 0 1.952l-2.574.574a1 1 0 0 0-.762.773l-.519 2.506c-.22 1.063-1.738 1.063-1.958 0l-.519-2.506a1 1 0 0 0-.762-.773l-2.574-.574c-1.044-.233-1.044-1.72 0-1.952l2.574-.574a1 1 0 0 0 .762-.773l.519-2.507ZM12.426 120.612c.22-1.063 1.739-1.063 1.959 0l1.26 6.086a1 1 0 0 0 .761.774l6.024 1.342c1.044.232 1.044 1.72 0 1.952l-6.024 1.342a1.002 1.002 0 0 0-.762.774l-1.26 6.086c-.22 1.063-1.738 1.063-1.958 0l-1.26-6.086a1.002 1.002 0 0 0-.761-.774l-6.024-1.342c-1.044-.232-1.044-1.72 0-1.952l6.024-1.342a1 1 0 0 0 .762-.774l1.26-6.086ZM47.15 27.195c-.577-.126-.577-.948 0-1.073l3.377-.735a.55.55 0 0 0 .42-.422l.719-3.39c.123-.58.951-.58 1.074 0l.719 3.39a.55.55 0 0 0 .42.422l3.377.735c.577.125.577.947 0 1.073l-3.377.734a.55.55 0 0 0-.42.423l-.719 3.39c-.123.58-.951.58-1.074 0l-.719-3.39a.55.55 0 0 0-.42-.423l-3.377-.734Z"
        />
        <Circle
          cx={129.559}
          cy={80.471}
          r={51.471}
          fill="#DDE2FF"
          stroke="#C4CBF5"
          strokeWidth={4}
        />
        <Circle
          cx={129.559}
          cy={80.471}
          r={42.953}
          fill="url(#a)"
          stroke="#C4CBF5"
          strokeWidth={4}
        />
        <Path
          fill="#DDE2FF"
          d="m61.062 177.771 28.388-39.428 1.261-.946 2.839-.631h4.1l2.208 1.577 2.208.947 1.893 2.207 1.577 3.47-24.603 46.367-2.839 1.577h-3.47l-4.73-1.577-3.786-1.577-3.47-4.732-1.576-1.892v-5.362Z"
        />
        <Path
          stroke="#C4CBF5"
          strokeWidth={4}
          d="m110.898 129.827-7.196 11.67M102.44 126.042l-6.94 10.409M91.342 136.766l-30.596 41.951M105.221 144.336l-24.603 47.629M90.711 137.397l.52-.289a6.223 6.223 0 0 1 3.733-.747 6.154 6.154 0 0 1 1.54.378l.889.343.3.099a11.344 11.344 0 0 1 4.431 2.739l.979.979c.397.397.745.842 1.034 1.325a6.85 6.85 0 0 1 .76 1.811l.324 1.247M81.249 191.334l-1.344.604c-1.301.585-2.705.91-4.131.954a10.888 10.888 0 0 1-3.281-.398l-.905-.253-.304-.103a18.852 18.852 0 0 1-7.145-4.395l-1.168-1.147a7.985 7.985 0 0 1-2.087-7.887l.178-.623"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={155.111}
            x2={107.792}
            y1={35.517}
            y2={125.424}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#C4CBF5" />
            <Stop offset={1} stopColor="#F1F3FF" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Text style={styles.text}>No results found</Text>
    </View>
  );
}
