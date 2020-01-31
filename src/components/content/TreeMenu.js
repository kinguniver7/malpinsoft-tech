import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade,  withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


function MinusSquare(props) {
    return (
      <SvgIcon fontSize="inherit" {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  }
        
  function PlusSquare(props) {
    return (
      <SvgIcon fontSize="inherit" {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  }
  
  function CloseSquare(props) {
    return (
      <SvgIcon className="close" fontSize="inherit" {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }
  
  function TransitionComponent(props) {
    const style = useSpring({
      from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });
  
    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }
  
  TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
  };
  
  const StyledTreeItem = withStyles(theme => ({
    iconContainer: {
      '& .close': {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 12,
      paddingLeft: 12,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
  }))(props => <TreeItem {...props} TransitionComponent={TransitionComponent} />);
    

const TreeMenu =(props) => {
    return (
        <TreeView
        className={`content-tree-menu`}
        
        defaultExpanded={[]}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >
        <StyledTreeItem nodeId="1" label="HTML/CSS" className="tree-menu__item">
          <StyledTreeItem nodeId="1_1" label="Глава 1. Введение в HTML5" >
            <StyledTreeItem nodeId="1_1_1" label="Что такое HTML"/>   
          </StyledTreeItem>
          <StyledTreeItem nodeId="1_2" label="Глава 2. Элементы в HTML5"/>            
          <StyledTreeItem nodeId="1_3" label="Глава 3. Работа с формами" />
          <StyledTreeItem nodeId="1_4" label="Глава 4. Семантическая структура страницы" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="2" label="React" className="tree-menu__item">
          <StyledTreeItem nodeId="2_1" label="Глава 1. Введение в React" >
            <StyledTreeItem nodeId="2_1_1" label="Что такое React. Первое приложение"/>   
          </StyledTreeItem>
          <StyledTreeItem nodeId="2_2" label="Глава 2. Основы React"/>            
          <StyledTreeItem nodeId="2_3" label="Глава 3. Формы" />
          <StyledTreeItem nodeId="2_4" label="Глава 4. Маршрутизация" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="3" label="Angular" className="tree-menu__item">
          <StyledTreeItem nodeId="3_1" label="Глава 1. Введение в Angular" >
            <StyledTreeItem nodeId="3_1_1" label="Что такое Angular. Начало работы с фреймворком"/>  
            <StyledTreeItem nodeId="3_1_2" label="Первое приложение"/>   
          </StyledTreeItem>
          <StyledTreeItem nodeId="3_2" label="Глава 2. Основы Angular"/>            
          <StyledTreeItem nodeId="3_3" label="Глава 3. Директивы" />
          <StyledTreeItem nodeId="3_4" label="Глава 4. Сервисы и dependency injection" />
        </StyledTreeItem>
        

      </TreeView>
    );
}
export default TreeMenu;